// Imports
import { GraphQLObjectType } from "graphql";

// App Imports
import * as stop from "./stop/fields/mutations";
import * as user from "./user/fields/mutations";

// Mutation
const mutation = new GraphQLObjectType({
  name: "mutations",
  description: "...",

  fields: {
    ...stop,
    ...user
  }
});

export default mutation;
