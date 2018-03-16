import Sequelize from 'sequelize'

export default (sequelize, DataTypes) => {
    return sequelize.define("schedules", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      start_time: {
        type: DataTypes.STRING
      },
      end_time: {
        type: DataTypes.STRING
      },
      frequency: {
        type: DataTypes.STRING
      }
    });
  };