import {
  CreateMermaidInput,
  CreateMermaidMutation,
  MermaidsByProjectIdQuery,
  MessagesByProjectIdAndCreatedAtQuery,
  ModelMessageConnection,
  ModelSortDirection,
} from './../../../API';
import { GraphQLQuery } from '@aws-amplify/api';
import {
  CreateMessageInput,
  CreateMessageMutation,
  Mermaid,
  Message,
  UpdateMermaidInput,
  UpdateMermaidMutation,
} from 'API';
import { API } from 'aws-amplify';
import { Role } from 'helpers/chatgpt/type';
import * as mutations from '../../../graphql/mutations';
import * as queries from '../../../graphql/queries';
import uuid from 'react-uuid';

const doGetListMessagesByProjectId = async (
  projectId: string,
  onSuccess?: (response: ModelMessageConnection) => void,
  onError?: (error: unknown) => void,
  onFinally?: () => void
) => {
  try {
    const response = await API.graphql<
      GraphQLQuery<MessagesByProjectIdAndCreatedAtQuery>
    >({
      query: queries.messagesByProjectIdAndCreatedAt,
      variables: {
        projectId,
        sortDirection: ModelSortDirection.ASC,
      },
    });

    const projectMessage = response.data
      ?.messagesByProjectIdAndCreatedAt as ModelMessageConnection;
    onSuccess && onSuccess(projectMessage);
  } catch (err) {
    console.error('Error when fetching list messages', err);
    onError && onError(err);
  } finally {
    if (onFinally) {
      onFinally();
    }
  }
};

const doSendMessage = async (
  id: string,
  role: Role,
  content: string,
  onSuccess?: (newMessage: Message) => void,
  onError?: (err: unknown) => void,
  onFinally?: () => void
) => {
  const messageDetail: CreateMessageInput = {
    role,
    content,
    projectId: id,
    messageId: uuid(),
  };
  try {
    const response = await API.graphql<GraphQLQuery<CreateMessageMutation>>({
      query: mutations.createMessage,
      variables: { input: messageDetail },
    });
    const newMessage = response.data?.createMessage as Message;
    onSuccess && onSuccess(newMessage);
    return newMessage;
  } catch (error) {
    console.error('Error when creating a project', error);
    onError && onError(error);
  } finally {
    onFinally && onFinally();
  }
};

const doUpdateMermaid = async (
  id: string,
  content: string,
  onSuccess?: (response: Mermaid) => void,
  onError?: (error: unknown) => void,
  onFinally?: () => void
) => {
  const mermaidDetail: UpdateMermaidInput = {
    id,
    content,
  };

  try {
    const response = await API.graphql<GraphQLQuery<UpdateMermaidMutation>>({
      query: mutations.updateMermaid,
      variables: { input: mermaidDetail },
    });
    const updatedMermaid = response.data?.updateMermaid as Mermaid;
    onSuccess && onSuccess(updatedMermaid);
    return updatedMermaid;
  } catch (error) {
    console.error('Error when updating mermaid', error);
    onError && onError(error);
  } finally {
    onFinally && onFinally();
  }
};

const doCreateMermaid = async (
  projectId: string,
  content: string,
  onSuccess?: (response: Mermaid) => void,
  onError?: (error: unknown) => void,
  onFinally?: () => void
) => {
  const mermaidDetail: CreateMermaidInput = {
    projectId,
    content,
  };

  try {
    const response = await API.graphql<GraphQLQuery<CreateMermaidMutation>>({
      query: mutations.createMermaid,
      variables: { input: mermaidDetail },
    });
    const createdMermaid = response.data?.createMermaid as Mermaid;
    onSuccess && onSuccess(createdMermaid);
    return createdMermaid;
  } catch (error) {
    console.error('Error when updating mermaid', error);
    onError && onError(error);
  } finally {
    onFinally && onFinally();
  }
};

const doGetMermaidByProjectId = async (
  projectId: string,
  onSuccess?: (response: Mermaid) => void,
  onError?: (error: unknown) => void,
  onFinally?: () => void
) => {
  try {
    const response = await API.graphql<GraphQLQuery<MermaidsByProjectIdQuery>>({
      query: queries.mermaidsByProjectId,
      variables: { projectId },
    });
    const mermaid = response.data?.mermaidsByProjectId?.items[0] as Mermaid;
    onSuccess && onSuccess(mermaid);
    return mermaid;
  } catch (error) {
    console.error('Error when getting mermaid', error);
    onError && onError(error);
  } finally {
    onFinally && onFinally();
  }
};

export {
  doGetListMessagesByProjectId,
  doSendMessage,
  doGetMermaidByProjectId,
  doCreateMermaid,
  doUpdateMermaid,
};
