import { v4 as uuidv4 } from "uuid";

interface User {
  id: string;
  username: string;
  age: number;
  hobbies: string[];
}

const users: User[] = [];

export const addUser = (
  username: string,
  age: number,
  hobbies: string[],
): User => {
  const newUser: User = { id: uuidv4(), username, age, hobbies };
  users.push(newUser);
  return newUser;
};

export const getUserById = (id: string): User | undefined => {
  return users.find((user) => user.id === id);
};

export const getAllUsers = (): User[] => {
  return users;
};

export const updateUser = (
  id: string,
  username: string,
  age: number,
  hobbies: string[],
): User | undefined => {
  const user = getUserById(id);

  if (user) {
    user.username = username;
    user.age = age;
    user.hobbies = hobbies;
    return user;
  }

  return undefined;
};

export const deleteUser = (id: string): boolean => {
  const index = users.findIndex((user) => user.id === id);

  if (index !== -1) {
    users.splice(index, 1);
    return true;
  }

  return false;
};
