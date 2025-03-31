import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.
        connect(`${process.env.MONGODB_URI}
        /${process.env.MONGODB_NAME}`)
        

        console.log(`MongoDB Connected: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.error("Error connecting to database", error);
        process.exit(1);
    }
};

export default connectDB;
