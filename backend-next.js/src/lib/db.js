import mongoose from "mongoose";

const URL = "mongodb://localhost:27017/";

export const connectDB = async () => {
  try {
    await mongoose.connect(URL);
    console.log("DataBase  connected");
  } catch (error) {
    console.log(error);
    console.log("DataBase is not  connected");
  }
};
