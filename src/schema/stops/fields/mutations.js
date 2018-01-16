// Imports
import { GraphQLString, GraphQLInt, GraphQLFloat } from "graphql";

// App Imports
import StopType from "../type";
import { create, remove } from "../resolvers";

// Stop create
export const stopCreate = {
  type: StopType,
  args: {
    name: {
      name: "name",
      type: GraphQLString
    },

    lat: {
      name: "lat",
      type: GraphQLFloat
    },

    long: {
      name: "long",
      type: GraphQLFloat
    }
  },
  resolve: create
};

// Stop remove
export const stopRemove = {
  type: StopType,
  args: {
    id: {
      name: "id",
      type: GraphQLInt
    }
  },
  resolve: remove
};
