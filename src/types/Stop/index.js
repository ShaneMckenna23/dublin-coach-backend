import resolvers from './resolvers'

const schema = `
  type Stop {
    id: Int!
    name: String!
    lat: Float!
    long: Float!
  }
`

const queries = `
  getAllStops: [Stop]
  getStopById(id: Int): Stop
  searchStops(filter: String!): [Stop]
`

export default () => ({
  schema,
  queries,
  resolvers
})


