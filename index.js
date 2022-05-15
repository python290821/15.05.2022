const express = require('express')
const { logger } = require('./logger')
const moveis_repo = require('./movies-repo')
const path = require('path')

logger.debug('====== System startup ========')

//logger.error(`cannot close db. Error: ${err}`)

const port = 8080

const app = express()

app.use(express.static(path.join('.',' /static')))

app.use(express.json())

app.use(express.urlencoded({ extended: true }))

app.get('/movies', async(req, res) => {
    const movies = await moveis_repo.getAllMovies()
    res.status(200).json( {movies })
})

app.listen(port, () => {
    logger.info(`Listening on port ${port}`)
    })




