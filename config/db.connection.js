import mongoose from 'mongoose';
import dotenv from 'dotenv'
dotenv.config()

const MONGO_URI = process.env.MONGO_URI;

const connectToDatabase = async () => {
  try {
    await mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to database!');
  } catch (error) {
    console.error(error);
  }
};

export default connectToDatabase;