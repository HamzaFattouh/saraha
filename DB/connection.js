import mongoose from "mongoose";
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_LOCAL);
        console.log("connect");
    } catch (error) {
        console.log("error to connect DB",error);
    }
}
export default connectDB;