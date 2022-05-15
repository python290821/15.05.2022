const express = require('express')
const { logger } = require('./logger')
const moveis_repo = require('./movies-repo')
const path = require('path')

logger.debug('====== System startup ========')

const port = 8080

const app = express()

app.use(express.static(path.join('.',' /static')))

app.use(express.json())

app.use(express.urlencoded({ extended: true }))

app.get('/movies', async(req, res) => {
    const movies = await moveis_repo.getAllMovies()
    res.status(200).json( {movies })
})

app.get('/movies/:movie_id', async(req, res) => {
    const movie_id = req.params.movie_id
    const movies = await moveis_repo.getMovieByid(movie_id)
    res.status(200).json( {movies })
})

app.delete('/movies/:movie_id', async(req, res) => {
    const movie_id = req.params.movie_id
    try {
        const movies = await moveis_repo.deleteMovie(movie_id)
        res.status(200).json( { num_records_deleted: movies })
    }
    catch (e) {
        logger.error(`failed to delete movie. Error: ${e}`)
        res.status(400).send({
            status: 'error',
            message: e.message
        })
    }
})

app.put('/movies/:movie_id', async(req, res) => {
    const movie_id = req.params.movie_id
    try {
        movie = req.body
        const result = await moveis_repo.updateMovie(movie, movie_id)
        res.status(200).json( {
            res: 'success',
            url: `/movies/${movie.ID}`,
            result
             })
    } catch (e) {
        logger.error(`failed to update movie. Error: ${e}`)
        res.status(400).send({
            status: 'error',
            message: e.message
        })
    }
})

app.post('/movies', async(req, res) => {
    try {
        movie = req.body
        const result = await moveis_repo.addMovie(movie)
        res.status(201).json( {
            res: 'success',
            url: `/movies/${result[0]}`,
            result
             })
    } catch (e) {
        logger.error(`failed to insert movie. Error: ${e}`)
        res.status(400).send({
            status: 'error',
            message: e.message
        })
    }
})

app.listen(port, () => {
    logger.info(`Listening on port ${port}`)
    })




