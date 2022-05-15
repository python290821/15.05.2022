const connectedKnex = require('./knex-connector')

// all orm CRUD
// orm + native-sql
// orm + sp

function getAllMovies() {
    return connectedKnex('PRODUCTS').select('*');
}

function getMovieByid(id) {
    return connectedKnex('PRODUCTS').select('*').where('id', id).first();
}

function addMovie(movie) {
    return connectedKnex('PRODUCTS').insert(movie);
}

function updateMovie(movie, id) {
    return connectedKnex('PRODUCTS').where('id', id).update(movie);
}

function deleteMovie(id) {
    return connectedKnex('PRODUCTS').where('id', id).del();
}

module.exports = {
    getAllMovies,
    getMovieByid,
    addMovie,
    updateMovie,
    deleteMovie
}