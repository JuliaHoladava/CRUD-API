import { IncomingMessage, ServerResponse } from 'node:http';
import * as userService from '../../services/userService';
import { getRequestBody } from '../../utils/requestHelper';
import { User } from '../../models/user';

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
