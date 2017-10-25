import { User } from '../../models/users/user.interface';

const userList: User[] = [
  { firstName: 'Paul', lastName: 'Halliday', email: 'paul@paul.com', avatar: 'assets/imgs/avatar.jpg' },
  { firstName: 'John', lastName: 'Doe', email: 'johnl@paul.com', avatar: 'assets/imgs/avatar.jpg' },
  { firstName: 'Sarah', lastName: 'Smith', email: 'sarah@paul.com', avatar: 'assets/imgs/avatar.jpg' },
  { firstName: 'Roger', lastName: 'Reynolds', email: 'roger@paul.com', avatar: 'assets/imgs/avatar.jpg' }
];

export const USER_LIST = userList;