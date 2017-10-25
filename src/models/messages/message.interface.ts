import { User } from '../users/user.interface';

export interface Message {
  user: User;
  date: Date;
  lastMessage: string;
}