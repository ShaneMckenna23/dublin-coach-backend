import { GraphQLServer } from 'graphql-yoga';
import { bundle } from 'graphql-modules';
import loadMiddleware from "./setup/middleware";
import startServer from "./setup/startServer";

import modules from './types'

const server = new GraphQLServer(bundle(modules))

loadMiddleware(server)

startServer(server)

