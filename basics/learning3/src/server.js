import express from "express"
import mainRoute from './routes/mainRoute.js'
const app = express()

app.use('/', mainRoute)

app.listen(5000 , (req , res) => {
    console.log("running on port 5000")
})


