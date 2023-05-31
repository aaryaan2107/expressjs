import mongoose from "mongoose";
const connectDB = (DATABASE_URL)=>{
    return mongoose.connect(DATABASE_URL)
    .then(()=>{
        console.log("connected done")
    })
    .catch((err)=>{
        console.log(err)
    })
}
export default connectDB