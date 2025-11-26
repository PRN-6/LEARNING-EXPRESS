import express from 'express';
import mainRoutes from "./routes/mainRoutes.js"

const app = express()

app.use("/", mainRoutes);

app.listen(3000 , () => {
    console.log("server is running")
})