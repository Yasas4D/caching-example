import { connect as _connect } from "mongoose";
import { config } from "dotenv";
import savePosts from "./init.js";

config();

const connectDb = async () => {
  try {
    const connect = await _connect(process.env.CONNECTION_STRING);
    console.log(
      "Database connected: ",
      connect.connection.host,
      connect.connection.name
    );
    // Save posts to the database
    savePosts();
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

export default connectDb;
