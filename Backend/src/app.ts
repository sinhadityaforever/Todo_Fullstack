import express, { Express } from "express";
import mongoose from "mongoose";
import cors from "cors";
import todoRoutes from "./routes";
import * as dotenv from "dotenv";
dotenv.config();
import endpoint from "./endpoint.config";

const app: Express = express();

const PORT: string | number = process.env.PORT || 4000;

app.use(cors());
app.use(todoRoutes);

const uri: string = `mongodb+srv://${endpoint.mongo_username}:${endpoint.mongo_password}@cluster0.jpzet.mongodb.net/${endpoint.mongo_db_name}?retryWrites=true&w=majority`;

mongoose
  .connect(uri)
  .then(() => {
    console.log("db connected");

    app.listen(PORT, () =>
      console.log(`Server running on http://localhost:${PORT}`)
    );
  })
  .catch((error) => {
    throw error;
  });
