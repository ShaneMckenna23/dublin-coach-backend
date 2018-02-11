// Imports
import { GraphQLObjectType } from "graphql";

// App Imports
import * as stop from "./stops/fields/mutations";

// Mutation
const mutation = new GraphQLObjectType({
  name: "mutations",
  description: "...",

  fields: {
    ...stop
  }
});

export default mutation;
