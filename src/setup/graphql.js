// Imports
import { graphqlExpress } from "apollo-server-express";

// App Imports
import config from "../config/config.json";
import schema from "../schema";

// Setup GraphQL
export default function(server) {
  console.info("SETUP - GraphQL...");

  // API (GraphQL on route `/api`)
  server.use(
    config.graphqlEndpoint,
    graphqlExpress(() => ({
      schema,
      tracing: config.graphql.tracing,
      cacheControl: config.graphql.cacheControl
    }))
  );
}
