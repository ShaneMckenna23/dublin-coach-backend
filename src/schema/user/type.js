import { GraphQLObjectType, GraphQLString } from "graphql";

const UserType = new GraphQLObjectType({
  name: "user",
  description: "...",

  fields: () => ({
    username: { type: GraphQLString },
    email: { type: GraphQLString },
    password: { type: GraphQLString }
  })
});

export default UserType;
