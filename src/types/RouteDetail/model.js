import Sequelize from 'sequelize'
import Stop from '../Stop/model'

export default (sequelize, DataTypes) => {
    return sequelize.define("route_details", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      stop_number: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      stop_id: {
        type: Sequelize.INTEGER,
        references: {
          model: Stop,
          key: 'id',
          deferrable: sequelize.Deferrable.INITIALLY_IMMEDIATE
        }
      },
      leg_minutes: {
        type: Sequelize.INTEGER
      }
    });
  };