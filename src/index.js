// Imports
import express from "express";

// App Imports
import setupLoadModules from "./setup/loadModules";
import setupGraphQL from "./setup/graphql";
import setupStartServer from "./setup/startServer";

// Create express server
const server = express();

server.set("port", 3000);

server.get("/favicon.ico", function(req, res) {
  res.status(204);
});

server.get("/", function(req, res) {
  res.send("Dublin-Coach-Backend");
});

// Setup load modules
setupLoadModules(server);

// Setup GraphQL
setupGraphQL(server);

// Start server
setupStartServer(server);

