import express from "express";
import connectDB from "./config/database";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT;

const app = express();

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
};

startServer();
