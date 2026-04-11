import express from 'express';
import 'dotenv/config';
import connectDB from './database/db.js';
import userRoute from './routes/userRoute.js';
import dns from 'dns';
dns.setServers(["8.8.8.8"]);

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use("/user",userRoute);

// http://localhost:5000/user/register

app.listen(PORT, () => {
    connectDB()
    console.log(`Server is running on port ${PORT}`);
});