import { createServer } from "node:http";

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello, World!\n");
});

const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {
  console.log(`Server run at http://localhost:${PORT}/`);
});
