import express from 'express'

/* Controllers */
import { hello } from './controllers/hello'
import { fruitList } from './controllers/fruits'


const port = 3000
const app = express()

app.get('/hello', hello)
app.get('/fruit-list', fruitList)

app.listen(port, () => {
  console.log(`App Listening on Port ${port}`)
})
