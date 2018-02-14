import models from '../models'

const options = {
    port: 3000,
    endpoint: '/graphql'
  }

export default function(server) {
    console.info('SETUP - Syncing database tables...')

    models.sequelize.sync({})
        .then(() => {
            console.info('INFO - Database sync complete.')

            console.info('SETUP - Starting server...')

            server.start(options, () => console.log('Server is running on localhost:3000'))
        })
        .catch(() => {
            console.error('ERROR - Unable to sync database.')
            console.error('ERROR - Server not started.')
        })
}