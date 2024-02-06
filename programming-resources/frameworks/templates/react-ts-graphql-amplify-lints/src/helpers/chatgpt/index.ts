import { Message, ModelMessageConnection } from 'API';
import uuid from 'react-uuid';
import { DEFAULT_GUIDE_FOR_CHATBOT } from '../../config/root';
import { Role } from './type';

const defaultGuideForChatBot = (
  projectId: string,
  role: Role = Role.System,
  content: string = DEFAULT_GUIDE_FOR_CHATBOT
): ModelMessageConnection => ({
  __typename: 'ModelMessageConnection',
  items: [generateGPTSystemMessage(projectId, role, content)],
  nextToken: null,
});

const generateGPTSystemMessage = (
  projectId: string,
  role: Role,
  content: string
): Message => ({
  __typename: 'Message',
  id: uuid(),
  projectId,
  messageId: uuid(),
  role,
  content,
  createdAt: `${Date.now()}}`,
  updatedAt: `${Date.now()}`,
});

export { defaultGuideForChatBot };
