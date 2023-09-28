import mongoose from "mongoose";
import { config } from "dotenv";

config();

const user = process.env.USER_DATABASE;
const password = process.env.PASSWORD_DATABASE;

const url_database = `mongodb+srv://${user}:${password}@cluster0.eream7r.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(url_database);

mongoose.connection.on("connected", () => {
  console.log("database connected");
});

mongoose.connection.on("error", (error) => {
  console.log("error connected database", error);
});

export default mongoose.connection;
