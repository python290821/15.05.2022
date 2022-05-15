const connectedKnex = require('./knex-connector')

// all orm CRUD
// orm + native-sql
// orm + sp

function getAllMovies() {
    return connectedKnex('PRODUCTS').select('*');
}

module.exports = {
    getAllMovies
}