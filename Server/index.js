import express from "express";
import cors from "cors";
import router from "./routes/auth.js";
import connectDB from "./db/db.js";
import dotenv from "dotenv";
dotenv.config();

connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});


app.use("/api/auth", router);



app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
