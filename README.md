# Dublin Coach Backend

[![Code Climate](https://codeclimate.com/github/vmasto/express-babel/badges/gpa.svg)](https://codeclimate.com/github/vmasto/express-babel)
[![Dependencies Status](https://david-dm.org/vmasto/express-babel/status.svg)](https://david-dm.org/vmasto/express-babel)
[![Dev Dependencies Status](https://david-dm.org/vmasto/express-babel/dev-status.svg)](https://david-dm.org/vmasto/express-babel)
[![NSP Status](https://nodesecurity.io/orgs/vmasto/projects/d8089487-4f0e-4f69-abb1-938c6de1e6a7/badge)](https://nodesecurity.io/orgs/vmasto/projects/d8089487-4f0e-4f69-abb1-938c6de1e6a7)

### Features:
- [Express.js](https://expressjs.com/) as the web framework.
- ES2017+ support with [Babel](https://babeljs.io/).
- Automatic polyfill requires based on environment with [babel-preset-env](https://github.com/babel/babel-preset-env).
- Linting with [ESLint](http://eslint.org/).
- Testing with [Jest](https://facebook.github.io/jest/).

## Getting started

```sh
# Clone the project
git clone https://github.com/ShaneMckenna23/dublin-coach-backend.git
cd dublin-coach-backend

# Make it your own
rm -rf .git && git init && npm init

# Install dependencies
npm install

# or if you're using Yarn
yarn
```

_If you don't use [Yarn](https://yarnpkg.com/) you can just replace `yarn` with `npm` in the commands that follow._

Then you can begin development:

```sh
yarn run dev
```

This will launch a [nodemon](https://nodemon.io/) process for automatic server restarts when your code changes.

### Testing

Testing is powered by [Jest](https://facebook.github.io/jest/). This project also uses [supertest](https://github.com/visionmedia/supertest) for demonstrating a simple routing smoke test suite. Feel free to remove supertest entirely if you don't wish to use it.

Start the test runner in watch mode with:

```sh
yarn test
```

You can also generate coverage with:

```sh
yarn test -- --coverage
```

(the extra double hyphen `--` is necessary).

### Linting

Linting is set up using [ESLint](http://eslint.org/). It uses ESLint's default [eslint:recommended](https://github.com/eslint/eslint/blob/master/conf/eslint.json) rules. Feel free to use your own rules and/or extend another popular linting config (e.g. [airbnb's](https://www.npmjs.com/package/eslint-config-airbnb) or [standard](https://github.com/feross/eslint-config-standard)).

Begin linting in watch mode with:

```sh
yarn run lint
```

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
