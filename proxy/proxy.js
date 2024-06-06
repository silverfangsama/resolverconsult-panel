import express from 'express'
import axios from 'axios'
import cors from 'cors'

const PORT = 3000
const app = express()

app.use(cors())
app.use(express.json())

app.get('/proxy', async (req, res) => {
    const { symbols } = req.query;
    const cmcApiKey = '79793165-e81c-4d16-bc14-3dd9c177285e';
    const url = `https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol=${symbols}`;
    try {
        const response = await axios.get(url, {
            headers: {
                'X-CMC_PRO_API_KEY': cmcApiKey,
                'Content-Type': 'application/json'
            }
        });

        console.log(response.data)
        res.json(response.data);
    } catch (error) {
        console.error('Failed to fetch data:', error);
        res.status(500).json({ error: 'Failed to fetch data' });
    }
});

app.listen(PORT, () => {
    console.log(`Proxy server listening at http://localhost:${PORT}`);
});