import {
  handleCreateUserRequest,
  handleGetUsersRequest,
} from '../controllers/userController.js';

export const userEndpoints = {
  '/api/users': {
    POST: handleCreateUserRequest,
    GET: handleGetUsersRequest,
  },
};
