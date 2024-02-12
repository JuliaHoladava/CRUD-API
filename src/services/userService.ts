import { v4 as uuidv4 } from 'uuid';
import * as user from '../models/user.js';

export const createUser = (
  username: string,
  age: number,
  hobbies: string[]
): user.User | Error => {
  if (!username || age <= 0 || !Array.isArray(hobbies)) {
    return new Error(
      'Invalid input data. Input must have username, age, hobbies'
    );
  }

  const id = uuidv4();

  return user.addUser({ id, username, age, hobbies });
};

export const getAllUsersService = () => {
  return user.getAllUsers();
};
