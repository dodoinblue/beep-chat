import { Profile } from '../../models/profile/profile.interface';

const userList: Profile[] = [
  { firstName: 'Paul', lastName: 'Halliday', email: 'paul@paul.com', avatar: 'assets/imgs/avatar.jpg', dateOfBirth: new Date() },
  { firstName: 'John', lastName: 'Doe', email: 'johnl@paul.com', avatar: 'assets/imgs/avatar.jpg', dateOfBirth: new Date() },
  { firstName: 'Sarah', lastName: 'Smith', email: 'sarah@paul.com', avatar: 'assets/imgs/avatar.jpg', dateOfBirth: new Date() },
  { firstName: 'Roger', lastName: 'Reynolds', email: 'roger@paul.com', avatar: 'assets/imgs/avatar.jpg', dateOfBirth: new Date() }
];

export const USER_LIST = userList;