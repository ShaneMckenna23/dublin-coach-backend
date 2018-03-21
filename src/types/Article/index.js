import resolvers from './resolvers'

const schema = `
  type Article {
    headline: String!
    extract: String!
    text: String!
    publishDate: String!
    photo: String!
    photoDesc: String!
    author: String!
  }
`

const queries = `
  getArticles(count: Int!): [Article]
`

export default () => ({
  schema,
  queries,
  resolvers
})