import { Message } from 'API';
import React from 'react';
import uuid from 'react-uuid';
import { MessageItem } from './MessageItem';

interface IProps {
  data?: (Message | null)[];
}
type RefType = HTMLDivElement;
export const MessageList = React.forwardRef<RefType, IProps>(
  ({ data: messages = [] }, lastElementRef) => {
    return (
      <div className="message-list">
        {messages.map((message) => (
          <MessageItem key={uuid()} item={message} />
        ))}
        <div ref={lastElementRef} />
      </div>
    );
  }
);
