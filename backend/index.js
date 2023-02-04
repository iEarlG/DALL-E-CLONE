import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import connectDB from './mongoose/connect.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({limit: '50mb' }));

app.get('/', async (req, res) => {
    res.send("IM HERE!!!!!!!!!!!!!!!!!");
});

const startServer = async () => {
    try {
        connectDB(process.env.MONGODB_URL);
        app.listen(8080, () => console.log("Server is running on port http://localhost:8080"));
    } catch (error) {
        console.log(error);
    }
}
startServer();