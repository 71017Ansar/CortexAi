import express from "express";
import dotenv from "dotenv";
import proxy from "express-http-proxy";
dotenv.config();

const app = express();
app.use("/auth", proxy(process.env.AUTH_SERVICE_URL));
const PORT = process.env.PORT;

app.use(express.json());
app.get("/", (req, res) => {
  res.json({ message: "Gateway server is running" });
});

app.listen(PORT, () => {
  console.log(`Gateway server is running on port ${PORT}`);
})

