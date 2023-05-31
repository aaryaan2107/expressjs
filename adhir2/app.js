
import express from 'express'
import connectDB from './db/connectdb.js'
const app = express()
const port = 3000
const DATABASE_URL = "mongodb://127.0.0.1:27017/school"
// mongoose.connect("mongodb://127.0.0.1:27017/school").then(() => {
//     console.log('connection successfull')
// })

connectDB(DATABASE_URL)

app.listen(port, () => {
    console.log(`ready.... http://localhost:${port}`)
})