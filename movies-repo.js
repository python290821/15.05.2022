const connectedKnex = require('./knex-connector')

// all orm CRUD
// orm + native-sql
// orm + sp

function getAllMovies() {
    return connectedKnex('movies2').select('*');
}

function getMovieByid(id) {
    return connectedKnex('movies2').select('*').where('id', id).first();
}

function getRaw(query) {
    // run native sql query
    return connectedKnex.raw(query);
}

function addMovie(movie) {
    return connectedKnex('movies2').insert(movie);
}

function updateMovie(movie, id) {
    return connectedKnex('movies2').where('id', id).update(movie);
}

function deleteMovie(id) {
    return connectedKnex('movies2').where('id', id).del();
}

module.exports = {
    getAllMovies,
    getMovieByid,
    getRaw,
    addMovie,
    updateMovie,
    deleteMovie
}