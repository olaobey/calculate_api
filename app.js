const http = require("http");
const fs = require("fs");
const path = require("path");
const mathFile = require("./db/mathFile");

const mathFilePath = path.join(__dirname, "db", "mathFile.js");
const PORT = 4000;
const HOST_NAME = "localhost";

const requestHandler = (req, res) => {
  res.setHeader("Content-type", "application/json");
  const { url, method } = req;
  const body = [];
  let result;
  if (url === "/calculate" && method === "POST") {
    req.on("data", (chunk) => {
      body.push(chunk);
    });

    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const bodyObj = JSON.parse(parsedBody);
      console.log(bodyObj);

      const { action, num1, num2 } = bodyObj;

      if (action === "sum") {
        result = mathFile.add(num1, num2);
      } else if (action === "subtract") {
        result = mathFile.subtract(num1, num2);
      } else if (action === "multiply") {
        result = mathFile.multiply(num1, num2);
      } else if (action === "divide") {
        result = mathFile.divide(num1, num2);
      }

      res.end(JSON.stringify(result));
    });
  }
};

const server = http.createServer(requestHandler);

server.listen(PORT, HOST_NAME, () => {
  console.log(`Server is listening on ${HOST_NAME}:${PORT}`);
});

module.exports = server;
