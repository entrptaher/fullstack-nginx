import express from "express";
import createServer from "./loaders/server";

const server = createServer();

server.start(
  {
    port: 4001,
    cors: {
      credentials: true,
      origin: "http://localhost:8080",
    },
    debug: true,
  },
  (listener) => {
    console.log(`Server is listening on port ${listener.port}`);
  }
);
