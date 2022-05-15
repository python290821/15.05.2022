const knex = require('knex')

const connectedKnex = knex({
    client: 'sqlite3',
    connection: {
        filename: 'db1.db'
    }
})

module.exports = connectedKnex;

