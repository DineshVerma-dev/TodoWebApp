import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const MONGODB_URL = process.env.DB_URL;

const Connection = () => {

    mongoose.connect(MONGODB_URL)
        .then(() => console.log("Database connected successfully"))
        .catch(error => console.error("Error while connecting to database:", error.message));

    mongoose.connection.on('disconnected', () => {
        console.log("Database disconnected");
    });

    mongoose.connection.on('error', (error) => {
        console.error("Error in MongoDB connection:", error.message);
    });

};

export default Connection;
