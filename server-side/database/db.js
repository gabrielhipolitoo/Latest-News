import mongoose from "mongoose";
import dotenv from "dotenv";
import EmailSchema from "./models.js";

dotenv.config();
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const db = () => {
  mongoose
    .connect(
      `mongodb+srv://${DB_USER}:${DB_PASS}@cluster0.odmvsye.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`,
    )
    .then(() => {
      console.log("conectado ao banco");
    })
    .catch((err) => console.log(err));
};

export default db;
