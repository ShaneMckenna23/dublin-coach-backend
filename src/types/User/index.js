import resolvers from './resolvers'

const schema = `
  type User {
    username: String! @unique
    email: String! @unique
    password: String!
  }

  type AuthPayload {
    token: String
    user: User
  }
`

const mutations = `
  signup(email: String!, password: String!, username: String!): AuthPayload
  login(email: String!, password: String!): AuthPayload
`
export default () => ({
  schema,
  mutations,
  resolvers
})