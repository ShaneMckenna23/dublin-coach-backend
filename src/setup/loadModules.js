// Imports
import cors from "cors";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import { graphiqlExpress } from "apollo-server-express";
import { Engine } from "apollo-engine";
import compression from "compression";
import apolloEngine from "../config/apolloEngine";
import config from "../config/config";

// Load express modules
export default function(server) {
  console.info("SETUP - Loading modules...");

  const engine = new Engine({
    engineConfig: {
      apiKey: apolloEngine.apiKey,
      logging: {
        level: "Error" // Engine Proxy logging level. DEBUG, INFO, WARN or ERROR
      }
    },
    graphqlPort: 3000, // GraphQL port
    endpoint: "/graphql", // GraphQL endpoint suffix - '/graphql' by default
    dumpTraffic: true // Debug configuration that logs traffic between Proxy and GraphQL server
  });

  server.use(engine.expressMiddleware());

  engine.start();

  // Enable CORS
  server.use(cors());

  // Request body parser
  server.use(bodyParser.json());
  server.use(bodyParser.urlencoded({ extended: false }));

  // Request body cookie parser
  server.use(cookieParser());

  // HTTP logger
  server.use(morgan("tiny"));

  //Graphiql
  server.use(
    "/graphiql",
    graphiqlExpress({
      endpointURL: config.graphqlEndpoint
    })
  );

  server.use(compression());
}
