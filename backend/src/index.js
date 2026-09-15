import express from "express";
import { PORT } from "./config/server.js";
import connectDB from "./config/DBConfig.js";
import userRouter from "./routes/userRouter.js";
import cors from "cors";

const app = express();


app.use(express.json());

app.use(cors());
app.use("/users", userRouter);

app.listen(PORT, () => {
  console.log("Server is running at PORT", PORT);
  connectDB();
});