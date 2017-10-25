import { User } from '../users/user';

export interface Message {
  user: User;
  date: Date;
  lastMessage: string;
}