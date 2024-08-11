import express, { json } from "express";
import connectDb from "./config/dbConnection.js";
import errorHandler from "./middleware/errorHandler.js";
import postRoutes from "./routes/postRoutes.js";
import { getRedisConnection } from "./config/redisConnection.js";

const port = process.env.PORT || 5000;
const app = express();

// Connect to the database
connectDb();

// Connect Redis
getRedisConnection();

// Middleware to parse JSON bodies of incoming requests
app.use(json());

// Routes
app.use("/api/v1/posts", postRoutes);

// Error handling middleware
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
