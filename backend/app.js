import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import "dotenv/config";
import routes from "./routes/index.js";
import cors from "cors";

const port = 3001;
const app = express();
app.use(cors());

app.use(cookieParser());
app.use(express.json());

app.use("/", routes);

mongoose.connect(process.env.MONGODB_CONNECTION_STRING).then(() => {
  app.listen(port, () => {
    console.log(`Server started on port ${port}`);
  });
});
