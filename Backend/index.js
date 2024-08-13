import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bookRoute from "./routes/bookRoutes.js";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js"; 

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

// Connect to MongoDB
mongoose.connect(URI)
    .then(() => console.log("Database connected!!"))
    .catch((error) => console.log("Error connecting Database", error));

// defining routes
app.use("/book", bookRoute);
app.use("/users", userRoutes);

app.listen(PORT, () => {
    console.log(`Server is live on port ${PORT}`);
});
