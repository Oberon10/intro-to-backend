import dotenv from "dotenv";
import connectDB from "./config/database.js";
import app from "./app.js";

dotenv.config({
    path: "./.env"
});

const startServer =  async () => {
    try {
        console.log("MONGODB_URI", process.env.MONGODB_URI);
        await connectDB();

        app.on ("error", (error) => {
            console.log("Error occurred while starting the server", error);
        throw error;
        })
        app.listen(process.env.port || 8000, () => {
            console.log(`server is running on port: ${process.env.port}`);
        });
    } catch (error) {
        console.log("MongoDB Connection failed!!!" , error); // display this message when connection to fails
}
}
startServer();