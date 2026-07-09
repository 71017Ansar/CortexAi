import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.get("/", (req, res) => {
  res.json({ message: "Gateway server is running" });
});

app.listen(PORT, () => {
  console.log(`Gateway server is running on port ${PORT}`);
})

