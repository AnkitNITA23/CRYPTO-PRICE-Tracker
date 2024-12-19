const express = require('express');
const axios = require('axios');
const router = express.Router();

const API_URL = 'https://api.coingecko.com/api/v3/simple/price';

router.get('/', (req, res) => {
    res.render('index', { data: null, error: null });
});

router.post('/price', async (req, res) => {
    const { crypto, currency } = req.body;

    try {
        const response = await axios.get(`${API_URL}?ids=${crypto}&vs_currencies=${currency}`);
        const price = response.data[crypto][currency];
        res.render('index', { data: { crypto, currency, price }, error: null });
    } catch (error) {
        res.render('index', { data: null, error: 'Could not fetch data. Please try again.' });
    }
});

module.exports = router;

