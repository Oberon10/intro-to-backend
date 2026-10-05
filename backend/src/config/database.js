import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const connectionInstance =  await mongoose.connect
        (`${process.env.MONGODB_URI}`) // THIS FETCHES YOUR LOGIN CREDENTIALS FROM THE .ENV FILE
        console.log(`/n MongoDB connected!!! ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MongoDB Connection failed" , error); // display this message when connection to fails
        process.exit(1)
    }
}
export default connectDB;