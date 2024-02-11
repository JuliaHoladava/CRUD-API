import { handleCreateUserRequest } from '../controllers/userController';

export const userEndpoints = {
  '/api/users': {
    POST: handleCreateUserRequest,
  },
};
