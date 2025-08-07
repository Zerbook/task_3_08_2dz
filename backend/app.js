import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import "dotenv/config";
import routes from "./routes/index.js";
import cors from "cors";

const port = 3001;
const app = express();

app.use(
  cors({
    origin: process.env.FRONTEND_HOST, // Указываем точный источник
    credentials: true, // Разрешаем отправку кук
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(cookieParser());
app.use(express.json());

app.use("/", routes);

mongoose.connect(process.env.DB_CONNECTION_STRING).then(() => {
  app.listen(port, () => {
    console.log(`Server started on port ${port}`);
  });
});
