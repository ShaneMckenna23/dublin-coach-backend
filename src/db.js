import mysql from "mysql";

const db = mysql.createConnection({
  host: "35.189.71.226",
  user: "dbuser",
  password: "",
  database: "dublin_coach_db"
});

export default db;
