import { IncomingMessage, ServerResponse } from 'node:http';
import * as userService from '../../services/userService.js';
import { getRequestBody } from '../../utils/requestHelper.js';
import { User } from '../../models/user.js';

export const handleCreateUserRequest = async (
  req: IncomingMessage,
  res: ServerResponse
) => {
  try {
    const body = await getRequestBody(req);
    const userInput = <User>JSON.parse(body);

    const { username, age, hobbies } = userInput;

    const result = userService.createUser(username, age, hobbies);

    if (result instanceof Error) {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: result.message }));
    } else {
      res.writeHead(201, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(result));
    }
  } catch (error) {
    res.writeHead(500, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Internal Server Error' }));
  }
};

export const handleGetUsersRequest = (
  req: IncomingMessage,
  res: ServerResponse
) => {
  try {
    const users = userService.getAllUsersService();
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(users));
  } catch (error) {
    res.writeHead(500, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Internal Server Error' }));
  }
};
