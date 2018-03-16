import models from "../../models";
import Sequelize from 'sequelize'
import {getRouteDetailsById} from '../RouteDetail/resolvers'

const Op = Sequelize.Op

const resolvers = {
  queries: {
    getRouteById
  }
}

async function getRouteById(parentValue, { id }) {
  let route = await models.Route.findOne({ where: { id } });
  
  let route_detail_id = route.dataValues.route_detail_id
  let routeDetailData = getRouteDetailsById(null, {id: route_detail_id})

  let schedule_id = route.dataValues.route_detail_id
  let schedule = await models.Schedule.findAll({ where: { id: schedule_id } });
  let scheduleData = []
  schedule.forEach(item => {
    scheduleData.push(item.dataValues)
  });

  return{
    id: route.dataValues.id,
    name: route.dataValues.name,
    route_detail: routeDetailData,
    schedule: scheduleData
  }
}

export default resolvers