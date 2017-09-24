import express from "express";
import bodyParser from "body-parser";
import db from "./db";
import { graphqlExpress, graphiqlExpress } from "apollo-server-express";
import myGraphQLSchema from "./schema/schema";

var app = express();

// db.connect();
// db.query("SELECT * FROM dublin_coach_db.stop", function(err, rows, fields) {
//   if (err) throw err;
//   console.log("Result: ", rows[0]);
// });

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
