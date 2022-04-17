import mongoose from "mongoose";

const connectDB = (handler) => async (req, res) => {
  if (mongoose.connections[0].readyState) {
    // Use current db connection
    return handler(req, res);
  }
  mongoose.connect(process.env.NEXT_PUBLIC_DB_CONNECT, () =>
    console.log("Connected to DB")
  );
  return handler(req, res);
};

export default connectDB;
