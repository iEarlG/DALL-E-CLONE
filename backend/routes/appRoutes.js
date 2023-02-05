import express from 'express';
import * as dotenv from 'dotenv';
import { Configuration, OpenAIApi } from 'openai';

dotenv.config();

const router = express.Router();

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEYS,
});

const openai = new OpenAIApi(configuration);

router.route('/').get((req, res) => {
    res.send("DALL-E- 2 API is working!");
});

router.route('/').post(async (req, res) => {
    try {
        const { prompt } = req.body;

        const AIresponse = await openai.createImage({
            prompt: prompt,
            n: 1,
            size: '1024x1024',
            response_format: 'b64_json',
        });

        const image = AIresponse.data.data[0].b64_json;

        res.status(200).json({ photo: image });
    } catch (error) {
        console.log(error);
        res.status(500).send(error?.response.data.error.message);
    }
});

export default router;