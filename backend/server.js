import express from 'express'
import mongoose from 'mongoose'
import Cards from './dbCards.js'
import Cors from 'cors'

//App config

const app = express()
const port = process.env.PORT || 8000

//const connection_url= "PUT YOUR MONGO DB CONNECTION LINK HERE"

//Middleware

app.use(express.json())
app.use(Cors())

//DB config

mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
})

//API endpoints
app.get('/', (req, res) => {
  res.status(200).send('Hello There ')
})

app.post('/tinder/card', (req, res) => {
  const dbCard = req.body
  Cards.create(dbCard, (err, data) => {
    if (err) {
      res.status(500).send(err)
    } else {
      res.status(201).send(data)
    }
  })
})

app.get('/tinder/card', (req, res) => {
  Cards.find((err, data) => {
    if (err) {
      res.status(500).send(err)
    } else {
      res.status(200).send(data)
    }
  })
})

//Listener

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
