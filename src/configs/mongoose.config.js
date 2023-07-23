import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const { MONGODB_URL } = process.env;

mongoose.connect(MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("error", (err) => {
  console.log(err);
  console.log("Connect MONDGODB ERROR");
});

mongoose.set("debug", true);
