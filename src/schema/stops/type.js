// Imports
import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLFloat,
  GraphQLInt
} from "graphql";

// Stop type
const StopType = new GraphQLObjectType({
  name: "stop",
  description: "...",

  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    lat: { type: GraphQLFloat },
    long: { type: GraphQLFloat }
  })
});

export default StopType;
