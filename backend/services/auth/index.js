// CortexAi/backend/services/auth/index.js
import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import router from "./routes/user.route.js";


dotenv.config();

connectDB();
console.log(process.env.MONGO_URI);

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use("/", router)
app.get("/", (req, res) => {
  res.json({ message: "auth server is running" });
});

app.listen(PORT, () => {
  console.log(`auth server is running on port ${PORT}`);
});