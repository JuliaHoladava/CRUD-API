import { createServer } from 'node:http';
import { handleRequest } from './api/routes/index';

const server = createServer(handleRequest);

const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {
  console.log(`Server run at http://localhost:${PORT}/`);
});
