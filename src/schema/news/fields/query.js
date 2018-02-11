import { GraphQLList } from "graphql";

import NewsType from "../type";
import { getAll } from "../resolvers";

export const news = {
  type: new GraphQLList(NewsType),
  resolve: getAll
};
