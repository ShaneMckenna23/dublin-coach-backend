"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require("body-parser");

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _db = require("./db");

var _db2 = _interopRequireDefault(_db);

var _apolloServerExpress = require("apollo-server-express");

var _schema = require("./schema/schema");

var _schema2 = _interopRequireDefault(_schema);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

// db.connect();
// db.query("SELECT * FROM dublin_coach_db.stop", function(err, rows, fields) {
//   if (err) throw err;
//   console.log("Result: ", rows[0]);
// });

app.use("/graphql", _bodyParser2.default.json(), (0, _apolloServerExpress.graphqlExpress)({ schema: _schema2.default }));

app.use("/graphiql", (0, _apolloServerExpress.graphiqlExpress)({
  endpointURL: "/graphql"
}));

exports.default = app;
//# sourceMappingURL=app.js.map