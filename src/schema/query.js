// Imports
import { GraphQLObjectType } from "graphql";

// App Imports
import * as thought from "./thoughts/fields/query";
import * as stop from "./stops/fields/query";

// Query
const query = new GraphQLObjectType({
  name: "query",
  description: "...",

  fields: () => ({
    ...thought,
    ...stop
  })
});

export default query;
