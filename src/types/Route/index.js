import resolvers from './resolvers'

const schema = `
  type Route {
    id: Int!
    name: String!
    route_detail: [RouteDetail]!
    schedule: [Schedule]!
  }
`

const queries = `
  getRouteById(id: Int): Route
`

export default () => ({
  schema,
  queries,
  resolvers
})


