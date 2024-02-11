import { IncomingMessage, ServerResponse } from 'node:http';
import { userEndpoints } from './userRoutes';

interface RouteHandler {
  (req: IncomingMessage, res: ServerResponse): void;
}

interface Route {
  [method: string]: RouteHandler;
}

interface Routes {
  [path: string]: Route | undefined;
}

const routes: Routes = {
  ...userEndpoints,
};

export const handleRequest = (req: IncomingMessage, res: ServerResponse) => {
  const { url, method } = req;

  const route: Route | undefined = routes[url || ''];
  const handler: RouteHandler | undefined = route
    ? route[method || '']
    : undefined;

  if (handler) {
    handler(req, res);
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Not found' }));
  }
};
