import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGOOSE_URI);
    console.log("db connected");
  } catch (error) {
    console.log(error);
  }
};
export { connectDB };
