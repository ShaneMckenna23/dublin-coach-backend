import Sequelize from "sequelize";

import databaseConnection from "./setup/databaseConnection";

const models = {
  Stop: databaseConnection.import("./types/Stop/model"),
  User: databaseConnection.import("./types/User/model"),
  Route: databaseConnection.import("./types/Route/model"),
  RouteDetail: databaseConnection.import("./types/RouteDetail/model"),
  Schedule: databaseConnection.import("./types/Schedule/model")
};

Object.keys(models).forEach(modelName => {
  if ("associate" in models[modelName]) {
    models[modelName].associate(models);
  }
});

models.sequelize = databaseConnection;
models.Sequelize = Sequelize;

export default models;