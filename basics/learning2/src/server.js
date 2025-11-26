import express from 'express'

import mainRoute from './routes/mainRoute.js'
const app = express()

app.use('/', mainRoute)

app.listen(4000, () => {
    console.log("listining to port 4000")
})