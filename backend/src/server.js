import express from 'express';
import "dotenv/config"
import authRoutes from "./routes/auth.route.js"
import userRoutes from "./routes/user.route.js"
import chatRoutes from "./routes/chat.route.js"
import { connectDB } from './lib/db.js';
import cookieParser from "cookie-parser"
import cors from 'cors';



const app = express();
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: "http://localhost:5173", // Allow requests from the frontend
    credentials: true, // Allow credentials to be sent
}));
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello, world!');
});

app.use("/api/auth", authRoutes)
app.use("/api/users", userRoutes)
app.use("/api/chat", chatRoutes)


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    connectDB()
});