import { Message } from 'API';
import { GPTMessage, Role } from '../../../helpers/chatgpt/type';

const gptMessageMapping = (
  messages: (Message | null)[] | null | undefined
): GPTMessage[] | Error => {
  if (!messages)
    return new Error('Error when mapping messages, no messages provided');

  return messages.map((message) => ({
    role: message?.role as Role,
    content: message?.content,
  }));
};

export { gptMessageMapping };
