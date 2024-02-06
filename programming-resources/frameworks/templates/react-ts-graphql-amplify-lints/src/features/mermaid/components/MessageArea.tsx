import React, { FC, FormEvent, useEffect, useRef, useState } from 'react';
import {
  sendMessage,
  projectSelector,
  updateDiagramSyntax,
  updateMessages,
} from '../../../redux/features/projects/projectsSlice';
import { Input, Button } from '@mui/material';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { MessageList } from './MessageList';
import { useSelector } from 'react-redux';
import { trim } from '../../../utils/strings';
import { getCompletion } from 'features/project-detail/api';
import { MermaidParser } from 'helpers/mermaid/parser';
import { GPTMessage, Role } from 'helpers/chatgpt/type';
import SendIcon from '@mui/icons-material/Send';
import { AxiosResponse } from 'axios';
import _ from 'lodash';
import { Message, ModelMessageConnection } from 'API';
import { gptMessageMapping } from '../mappers';
import {
  doCreateMermaid,
  doGetListMessagesByProjectId,
  doSendMessage,
  doUpdateMermaid,
} from '../api';

interface IProps {
  projectId: string;
}

export const MessageArea: FC<IProps> = ({ projectId }) => {
  const mermaidParser = new MermaidParser();

  // Refs
  const inputRef = useRef<HTMLInputElement>(null);
  const lastElementRef = useRef<HTMLDivElement>(null);

  // Selectors
  const dispatch = useDispatch();
  const projectList = useSelector(projectSelector);

  const messageList = projectList.filter(
    (project) => project.projectId === projectId
  )[0].messages?.items;
  const mermaid = projectList.filter(
    (project) => project.projectId === projectId
  )[0].mermaid;

  // States
  const [isGeneratingMessage, setIsGeneratingMessage] =
    useState<boolean>(false);

  useEffect(() => {
    const onSuccess = (messages: ModelMessageConnection) => {
      dispatch(updateMessages({ projectId, messages }));
    };
    doGetListMessagesByProjectId(projectId, onSuccess);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [projectId]);

  // Send a system message to let the AI model know about itself.
  useEffect(() => {
    if (!messageList) {
      return;
    }
    if (
      messageList[0] &&
      messageList.length === 1 &&
      messageList[0].role === Role.System
    ) {
      handleCompletion();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [projectId]);

  useEffect(() => {
    if (!messageList) {
      return;
    }
    if (
      // messageList.length > 1 &&
      messageList[messageList.length - 1]?.role === Role.User
    ) {
      handleCompletion();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [messageList]);

  const handleCompletion = _.debounce(async () => {
    try {
      const response = await getCompletion(
        gptMessageMapping(messageList) as GPTMessage[]
      );
      const { content, role } = (response as AxiosResponse).data.choices[0]
        .message;

      const newMessage = await doSendMessage(projectId, role, content);
      if (newMessage) {
        dispatch(sendMessage({ projectId, message: newMessage }));

        // Handle check and update the mermaid code if existing
        handleMermaidCodeInCompletion(content);
      }
      setIsGeneratingMessage(false);
    } catch (error) {}
  }, 1000);

  const handleMermaidCodeInCompletion = async (rawResponse: string) => {
    const mermaidCode = mermaidParser.looseParse(rawResponse);

    if (typeof mermaidCode === 'string') {
      //! TODO: Handle show apply or not?
      if (!mermaid) {
        const createdMermaid = await doCreateMermaid(projectId, mermaidCode);
        createdMermaid &&
          dispatch(updateDiagramSyntax({ projectId, mermaid: createdMermaid }));
      } else {
        const updatedMermaid = await doUpdateMermaid(mermaid.id, mermaidCode);
        updatedMermaid &&
          dispatch(updateDiagramSyntax({ projectId, mermaid: updatedMermaid }));
      }
    }
  };

  const handleSubmitMessage = async (event: FormEvent) => {
    event.preventDefault();
    if (inputRef.current) {
      const rawInput = inputRef.current.value;
      if (!rawInput) return;

      inputRef.current.value = '';

      const newMessage = await doSendMessage(
        projectId,
        Role.User,
        trim(rawInput)
      );

      if (newMessage) {
        dispatch(sendMessage({ projectId, message: newMessage }));
      }

      setIsGeneratingMessage(false);
    }
  };

  // Trigger scroll to bottom whenever the length of message list changes
  useEffect(() => {
    lastElementRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messageList?.length]);

  // const keyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
  //   if (!event.shiftKey && event.keyCode === 13) {
  //     handleSubmitMessage();
  //   }
  // };

  return (
    <div className="message-container">
      <MessageList
        data={messageList?.filter(
          (message: Message | null) => message?.role !== Role.System
        )}
        ref={lastElementRef}
      />
      <form onSubmit={handleSubmitMessage} className="input-area">
        <Input
          disabled={isGeneratingMessage}
          className="message-input"
          inputRef={inputRef}
          autoComplete="off"
          placeholder="What are you thinking about?"
          disableUnderline
        />
        <Button disabled={isGeneratingMessage}>
          <SendIcon color="secondary" />
        </Button>
      </form>
    </div>
  );
};
