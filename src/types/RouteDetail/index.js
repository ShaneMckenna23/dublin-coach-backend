import resolvers from './resolvers'

const schema = `
  type RouteDetail {
    id: Int!
    stop_number: Int!
    stop: Stop!
    leg_minutes: Int!
  }
`

const queries = `
`

export default () => ({
  schema,
  queries,
  resolvers
})


