import { GraphQLInt, GraphQLList } from "graphql";

import StopType from "../type";
import { getAll, getById } from "../resolvers";

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
