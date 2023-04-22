import http from "node:http";

const users = [];

const server = http.createServer((req, res) => {
  const { url, method } = req;

  if (method === "GET" && url === "/users") {
    return res
    .setHeader('Content-type', 'application/json')
    .end(JSON.stringify(users));
  }

  if (method === "POST" && url === "/users") {
    users.push({
      id: 1,
      name: "John Doe",
      email: "johndoe@gmail.com",
    });
    return res.end("Criação de usuários");
  }
});

server.listen(3333);
