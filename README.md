# Dublin Coach Backend

[![CircleCI](https://circleci.com/gh/ShaneMckenna23/dublin-coach-backend.svg?style=shield)](https://circleci.com/gh/ShaneMckenna23/dublin-coach-backend)
[![dependencies Status](https://david-dm.org/ShaneMckenna23/dublin-coach-backend/status.svg)](https://david-dm.org/ShaneMckenna23/dublin-coach-backend)
[![Code Climate](https://codeclimate.com/github/ShaneMckenna23/dublin-coach-backend.svg)](https://codeclimate.com/github/ShaneMckenna23/dublin-coach-backend)
[![NSP Status](https://nodesecurity.io/orgs/collage/projects/073231a2-d956-48bc-a6bc-f67df93a6508/badge)](https://nodesecurity.io/orgs/collage/projects/073231a2-d956-48bc-a6bc-f67df93a6508)

### Features:
- GraphQL Yogo
- ES2017+ support with [Babel](https://babeljs.io/).
- Continuous deployment to Google kubernetes Engine.
- Testing with [Jest](https://facebook.github.io/jest/).

### Testing

Testing is powered by [Jest](https://facebook.github.io/jest/).

Start the test runner in watch mode with:

```sh
yarn test
```

You can also generate coverage with:

```sh
yarn test -- --coverage
```

(the extra double hyphen `--` is necessary).

### GraphQL Yogo

Fully-featured GraphQL Server with focus on easy setup, performance & great developer experience

## Overview

* **Easiest way to run a GraphQL server:** Sensible defaults & includes everything you need with minimal setup.
* **Includes Subscriptions:** Built-in support for GraphQL subscriptions using WebSockets.
* **Compatible:** Works with all GraphQL clients (Apollo, Relay...) and fits seamless in your GraphQL workflow.

`graphql-yoga` is based on the following libraries & tools:

  * [`express`](https://github.com/expressjs/express)/[`apollo-server`](https://github.com/apollographql/apollo-server): Performant, extensible web server framework
  * [`graphql-subscriptions`](https://github.com/apollographql/graphql-subscriptions)/[`subscriptions-transport-ws`](https://github.com/apollographql/subscriptions-transport-ws): GraphQL subscriptions server
  * [`graphql.js`](https://github.com/graphql/graphql-js)/[`graphql-tools`](https://github.com/apollographql/graphql-tools): GraphQL engine & schema helpers
  * [`graphql-playground`](https://github.com/graphcool/graphql-playground): Interactive GraphQL IDE

## Features

* GraphQL spec-compliant
* File upload
* GraphQL Subscriptions
* TypeScript typings
* GraphQL Playground
* Extensible via Express middlewares
* Apollo Tracing
* Accepts both `application/json` and `application/graphql` content-type

### Environmental variables in development

The project uses [dotenv](https://www.npmjs.com/package/dotenv) for setting environmental variables during development. Simply copy `.env.example`, rename it to `.env` and add your env vars as you see fit. 

It is **strongly** recommended **never** to check in your .env file to version control. It should only include environment-specific values such as database passwords or API keys used in development. Your production env variables should be different and be set differently depending on your hosting solution. `dotenv` is only for development.

### Deployment

Deployment is specific to hosting platform/provider but generally:

```sh
yarn run build
```

will compile your src into `/build`, and 

```sh
yarn start
```

will run `build` (via the `prestart` hook) and start the compiled application from the `/build` folder.

## License
MIT License. See the [LICENSE](LICENSE) file.
