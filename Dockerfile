FROM node:8-alpine

# The base node image sets a very verbose log level.
ENV NPM_CONFIG_LOGLEVEL warn

WORKDIR /src


COPY package*.json ./

RUN npm install

COPY . .

CMD [ "npm", "run" ,"start-prod" ]

EXPOSE 3000

