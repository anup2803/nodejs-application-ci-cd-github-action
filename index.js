import express from "express";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const PORT = process.env.PORT ?? 8080;

app.get("/", (req, res) => {
  return res.json({ message: "Nodes js server is running" });
});

app.listen(PORT, () => {
  console.log(`Server is running at PORT ${PORT}`);
});
