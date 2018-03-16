import models from "../../models";
import Sequelize from 'sequelize'
import {getStopById} from '../Stop/resolvers'

const Op = Sequelize.Op

const resolvers = {
  queries: {
  }
}

export async function getRouteDetailsById(parentValue, { id }) {
  let routeDetail = await models.RouteDetail.findAll({ where: { id} })
  
  let routeDetailData = []
  routeDetail.forEach(item => {
    let stopData = getStopById(null, {id: item.dataValues.stop_id})
    routeDetailData.push({
      id: item.dataValues.id,
      stop_number: item.dataValues.stop_number,
      stop: stopData,
      leg_minutes: item.dataValues.leg_minutes,
    })
  });
  return routeDetailData
}

export default resolvers