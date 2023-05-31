import mongoose from "mongoose";
const connectDB = async (DATABASE_URL)=>{
    try {
        await mongoose.connect(DATABASE_URL);
        console.log("connected done");
    } catch (err) {
        console.log(err);
    } 
}
export default connectDB