import { connect } from "mongoose";
import { mongoDbUri } from "./index.js";

export const connectToDB =  async () => {
    try {
        const result = await connect(mongoDbUri);
        console.log(`MongoDB Connected: ${result.connection.host}`);
    } catch (error) {
        console.log(`Error connecting to MongoDB : ${error.message}`);
        process.exit(1);
    }
}