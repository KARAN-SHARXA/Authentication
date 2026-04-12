import mongoose from "mongoose";
import dns from "dns";
dns.setServers(["1.1.1.1", "8.8.8.8"]);

const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_URI}/note-app`);
    console.log("MongodDB is connected successfully");
  } catch (error) {
    console.log("mongoDB connect error", error);
  }
};
export default connectDB;
