import express from 'express';
import "dotenv/config"
import authRoutes from "./routes/auth.route.js"
import { connectDB } from './lib/db.js';
import cookieParser from "cookie-parser"

const app = express();
app.use(express.json())
app.use(cookieParser())
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello, world!');
});

app.use("/api/auth", authRoutes)


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    connectDB()
});