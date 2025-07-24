// import express from 'express';
// import "dotenv/config"
// import authRoutes from "./routes/auth.route.js"
// import userRoutes from "./routes/user.route.js"
// import chatRoutes from "./routes/chat.route.js"
// import { connectDB } from './lib/db.js';
// import cookieParser from "cookie-parser"
// import cors from 'cors';
// import path from 'path';


// const app = express();
// app.use(express.json())
// app.use(cookieParser())
// app.use(cors({
//     origin: "http://localhost:5173", // Allow requests from the frontend
//     credentials: true, // Allow credentials to be sent
// }));
// const PORT = process.env.PORT || 3000;
// const __dirname = path.resolve();


// app.get('/', (req, res) => {
//     res.send('Hello, world!');
// });

// app.use("/api/auth", authRoutes)
// app.use("/api/users", userRoutes)
// app.use("/api/chat", chatRoutes)

// if (process.env.NODE_ENV === "production") {
//     app.use(express.static(path.join(__dirname, "../frontend/dist")));

//     app.get("/*", (req, res) => {   
//         res.sendFile(path.join(__dirname, "../frontend", "index.html"));
//     });
// }




// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
//     connectDB()
// });



import express from 'express';
import 'dotenv/config';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

import authRoutes from './routes/auth.route.js';
import userRoutes from './routes/user.route.js';
import chatRoutes from './routes/chat.route.js';
import { connectDB } from './lib/db.js';

// Fix __dirname for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}));

// Routes
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/chat", chatRoutes);

// Serve frontend in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}

// Start server and connect to DB
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
  connectDB();
});
