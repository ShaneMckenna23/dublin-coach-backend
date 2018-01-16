// Imports
import { GraphQLObjectType } from "graphql";

// App Imports
import * as thought from "./thoughts/fields/mutations";
import * as stop from "./stops/fields/mutations";

// Mutation
const mutation = new GraphQLObjectType({
  name: "mutations",
  description: "...",

  fields: {
    ...thought,
    ...stop
  }
});

export default mutation;
