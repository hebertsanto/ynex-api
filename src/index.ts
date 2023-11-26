import express from "express";
import bodyParser from "body-parser";
import db from "../src/database";
import routes from "../src/routes";
import cors from "cors";
import { config } from 'dotenv';
config();

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(routes);

db.on("conected", () => {});
db.on("error", (error) => {
  return error;
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`server is running on port ${process.env.PORT}`)
});
