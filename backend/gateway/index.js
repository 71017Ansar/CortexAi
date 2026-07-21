import express from "express";
import dotenv from "dotenv";
import proxy from "express-http-proxy";
dotenv.config();
import cors from "cors"


const app = express();
app.use(cors({
  origin:process.env.FRONTEND_URL,
  credentials:true
}))
app.use("/auth", proxy(process.env.AUTH_SERVICE_URL));
const PORT = process.env.PORT;

app.use(express.json());
app.get("/", (req, res) => {
  res.json({ message: "Gateway server is running" });
});

app.listen(PORT, () => {
  console.log(`Gateway server is running on port ${PORT}`);
})

