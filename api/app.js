import express from 'express'
const app = express()
const port = '8000'
import connectDB from './db/connectdb.js'
import web from './routes/web.js'
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://127.0.0.1:27017"
connectDB(DATABASE_URL);


app.use(express.json())
app.use("/clg", web)

app.listen(port,()=>{
    console.log(`server is on ar http://127.0.0.1:${port}`)
})