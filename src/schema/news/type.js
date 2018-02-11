import { GraphQLObjectType, GraphQLString } from "graphql";

const NewsType = new GraphQLObjectType({
  name: "news",
  description: "...",

  fields: () => ({
    headline: { type: GraphQLString },
    extract: { type: GraphQLString },
    text: { type: GraphQLString },
    publishDate: { type: GraphQLString },
    photo: { type: GraphQLString },
    photoDesc: { type: GraphQLString },
    author: { type: GraphQLString }
  })
});

export default NewsType;
