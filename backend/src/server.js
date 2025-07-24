import express from 'express';
import "dotenv/config"
import authRoutes from "./routes/auth.route.js"
import userRoutes from "./routes/user.route.js"
import chatRoutes from "./routes/chat.route.js"
import { connectDB } from './lib/db.js';
import cookieParser from "cookie-parser"
import cors from 'cors';
import path from 'path';


const app = express();
app.use(express.json())
app.use(cookieParser())
app.use(cors({
  origin: "http://localhost:5173", // Allow requests from the frontend
  credentials: true, // Allow credentials to be sent
}));
const PORT = process.env.PORT || 3000;
const __dirname = path.resolve();


app.use("/api/auth", authRoutes)
app.use("/api/users", userRoutes)
app.use("/api/chat", chatRoutes)

if (process.env.NODE_ENV === 'production') {
  const frontendPath = path.resolve(__dirname, '../frontend/dist');
  app.use(express.static(frontendPath));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(frontendPath, 'index.html'));
  });
}


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  connectDB()
});


