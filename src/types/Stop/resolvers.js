import models from "../../models";
import Sequelize from 'sequelize'

const Op = Sequelize.Op

const resolvers = {
  queries: {
    getAllStops,
    getStopById,
    searchStops
  }
}

async function getStopById(parentValue, { id }) {
  return await models.Stop.findOne({ where: { id } });
}

async function getAllStops() {
  return await models.Stop.findAll();
}

async function searchStops(parentValue, { filter }) {
  return await models.Stop.findAll({
    limit: 5,
    where: {
      name: {
        [Op.like]: '%' + filter + '%'
      }
    }
  });
}

export default resolvers