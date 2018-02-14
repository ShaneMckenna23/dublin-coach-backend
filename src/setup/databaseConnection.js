import { Sequelize } from "sequelize";

import env from "./env";
import databaseConfig from "../../config/database.json";

console.log(env);
const databaseConfigEnv = databaseConfig[env];

const connection = new Sequelize(
  databaseConfigEnv.database,
  databaseConfigEnv.username,
  databaseConfigEnv.password,
  {
    host: databaseConfigEnv.host,
    dialect: databaseConfigEnv.dialect,
    logging: false,
    operatorsAliases: Sequelize.Op
  }
);

console.info("SETUP - Connecting database...");

connection
  .authenticate()
  .then(() => {
    console.info("INFO - Database connected.");
  })
  .catch(err => {
    console.error("ERROR - Unable to connect to the database:", err);
  });

export default connection;