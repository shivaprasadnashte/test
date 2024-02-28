import mongoose from "mongoose";

const connectDb = () => {
  try {
    mongoose.connect("mongodb+srv://Shivaprasad:Pass123@cluster0.cwxauli.mongodb.net/students?retryWrites=true&w=majority");
    console.log("Database connected");
  } catch (error) {
    console.log(error);
    console.log("Database connection failed");
  }
};

export default connectDb;