import resolvers from './resolvers'

const schema = `
  type Schedule {
    id: Int!
    start_time: String!
    end_time: String!
    frequency: String!
  }
`

const queries = `
`

export default () => ({
  schema,
  queries,
  resolvers
})


