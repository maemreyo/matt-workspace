import { DUMMY_USER_ID } from '../../config/root';

export const isUserSent = (senderId: string): boolean =>
  senderId === DUMMY_USER_ID;
