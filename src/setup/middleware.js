import { Engine } from 'apollo-engine'

const engine = new Engine({
    engineConfig: { apiKey: "service:ShaneMckenna23-dublin-coach:YZSS5AeoArdlqL__4erq4A" },
    endpoint: '/graphql',
    graphqlPort: 3000,
  })

export default function(server) {
      engine.start();
      server.express.use(engine.expressMiddleware())
}