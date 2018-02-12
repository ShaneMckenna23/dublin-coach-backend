import { GraphQLString } from "graphql";

import UserType from "../type";
import { create, login } from "../resolvers";

export const userCreate = {
  type: UserType,
  args: {
    username: {
      name: "username",
      type: GraphQLString
    },

    email: {
      name: "email",
      type: GraphQLString
    },

    password: {
      name: "password",
      type: GraphQLString
    }
  },
  resolve: create
};

export const userLogin = {
  type: UserType,
  args: {
    username: {
      name: "username",
      type: GraphQLString
    },

    email: {
      name: "email",
      type: GraphQLString
    },

    password: {
      name: "password",
      type: GraphQLString
    }
  },
  resolve: login
};
