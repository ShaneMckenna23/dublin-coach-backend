// Imports
import { GraphQLInt, GraphQLList } from "graphql";

// App Imports
import StopType from "../type";
import { getAll, getById } from "../resolvers";

// Thoughts All
export const stops = {
  type: new GraphQLList(StopType),
  resolve: getAll
};

// Thought By ID
export const stop = {
  type: StopType,
  args: {
    id: { type: GraphQLInt }
  },
  resolve: getById
};
