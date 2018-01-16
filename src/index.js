// Imports
import express from "express";

// App Imports
import setupLoadModules from "./setup/loadModules";
import setupGraphQL from "./setup/graphql";
import setupStartServer from "./setup/startServer";

// Create express server
const server = express();

server.set("port", process.env.PORT || 3000);

server.get("/favicon.ico", function(req, res) {
  res.status(204);
});

// Setup load modules
setupLoadModules(server);

// Setup GraphQL
setupGraphQL(server);

// Start server
setupStartServer(server);
