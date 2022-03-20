/**
 * Point d'entrée du serveur.
 * @author Yanik Sweeney 2021/12/01
 */
require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT
const helmet = require('helmet')
const baseRouter = require('./routes/api')

app.use(helmet())
app.use(express.json())
app.use(cors())

app.use('/api', baseRouter)

// Pour les routes qui n'existent pas
app.use(function(req, res) {
  res.status(404);
  res.json({message: 'Route invalide'})
})

app.listen(port, () => {
  console.log(`Api high scores listening at http://localhost:${port}`)
})






