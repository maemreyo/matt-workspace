import {
  DEFAULT_MARKER_BEGINNING_MERMAID_CODE,
  DEFAULT_MARKER_ENDING_MERMAID_CODE,
} from '../../../config/root';
import { Role } from 'helpers/chatgpt/type';
import React, { FC } from 'react';
import { Message } from 'API';

interface IProps {
  item: Message | null;
}

export const MessageItem: FC<IProps> = ({ item: message }) => {
  const regEx = new RegExp(
    DEFAULT_MARKER_BEGINNING_MERMAID_CODE +
      '|' +
      DEFAULT_MARKER_ENDING_MERMAID_CODE,
    'gi'
  );

  return (
    <div className="message-item">
      <span className="sender-name">
        {message?.role === Role.User ? 'User' : 'Bot'}
      </span>
      <span>&nbsp;{'>'}&nbsp;</span>
      <span className="message-content">{message?.content.trim()}</span>
    </div>
  );
};
