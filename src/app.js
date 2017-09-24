import express from "express";
import bodyParser from "body-parser";
import { graphqlExpress, graphiqlExpress } from "apollo-server-express";
import myGraphQLSchema from "./schema/schema";

var app = express();

app.use(
  "/graphql",
  bodyParser.json(),
  graphqlExpress({ schema: myGraphQLSchema })
);

app.use(
  "/graphiql",
  graphiqlExpress({
    endpointURL: "/graphql"
  })
);

export default app;
