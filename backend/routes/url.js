const express = require('express');
const { shortenUrl, redirectUrl } = require('../controllers/urlController');

const router = express.Router();


// Route to shorten URL
router.post('/shorten', (req, res) => {
  const { originalUrl } = req.body;
  if (!originalUrl) {
    return res.status(400).json({ error: 'Original URL is required' });
  }
  shortenUrl(req, res);
});

// Route to redirect to original URL
router.get('/:shortUrl', redirectUrl);

module.exports = router;
