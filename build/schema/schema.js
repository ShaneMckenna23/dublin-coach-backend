"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphql = require("graphql");

let count = 2;

let schema = new _graphql.GraphQLSchema({
  query: new _graphql.GraphQLObjectType({
    name: "RootQueryType",
    fields: {
      count: {
        type: _graphql.GraphQLInt,
        resolve: function () {
          return count;
        }
      }
    }
  })
});

exports.default = schema;
//# sourceMappingURL=schema.js.map