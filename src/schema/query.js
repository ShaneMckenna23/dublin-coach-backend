import { GraphQLObjectType } from "graphql";

import * as stop from "./stops/fields/query";
import * as news from "./news/fields/query";

// Query
const query = new GraphQLObjectType({
  name: "query",
  description: "...",

  fields: () => ({
    ...stop,
    ...news
  })
});

export default query;
