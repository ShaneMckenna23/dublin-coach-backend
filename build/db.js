"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mysql = require("mysql");

var _mysql2 = _interopRequireDefault(_mysql);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const db = _mysql2.default.createConnection({
  host: "35.189.71.226",
  user: "dbuser",
  password: "",
  database: "dublin_coach_db"
});

exports.default = db;
//# sourceMappingURL=db.js.map