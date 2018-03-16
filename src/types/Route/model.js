import Sequelize from 'sequelize'
import RouteDetail from '../RouteDetail/model.js'
import Schedule from '../Schedule/model.js'

export default (sequelize, DataTypes) => {
    return sequelize.define("routes", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING
      },
      route_detail_id: {
        type: Sequelize.INTEGER,
        references: {
          model: RouteDetail,
          key: 'id',
          deferrable: sequelize.Deferrable.INITIALLY_IMMEDIATE
        }
      },
      schedule_id: {
        type: Sequelize.INTEGER,
        references: {
          model: Schedule,
          key: 'id',
          deferrable: sequelize.Deferrable.INITIALLY_IMMEDIATE
        }
      }
    });
  };
