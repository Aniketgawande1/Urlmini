const Url = require('../models/url'); // Corrected path for Url model
const shortid = require('shortid'); // Generates unique short URL codes

// 🎯 Shorten URL Controller
const shortenUrl = async (req, res) => {
  const { originalUrl } = req.body;

  // Check if originalUrl is provided
  if (!originalUrl) {
    return res.status(400).json({ error: 'Please provide a valid URL' });
  }

  try {
    // Check if URL already exists in DB
    let url = await Url.findOne({ originalUrl });

    if (url) {
      // Return existing URL if found
      res.json(url);
    } else {
      // Generate short URL code using shortid
      const shortUrl = shortid.generate();

      // Create new URL entry in the database
      const newUrl = await Url.create({
        originalUrl,
        shortUrl,
        date: new Date(),
      });

      // Return the newly created URL
      res.status(201).json(newUrl);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server Error' });
  }
};

// 🔀 Redirect to original URL
const redirectUrl = async (req, res) => {
  try {
    // Find URL by short code
    const url = await Url.findOne({ shortUrl: req.params.shortUrl });

    if (url) {
      // Redirect to the original URL
      return res.redirect(url.originalUrl);
    } else {
      res.status(404).json({ error: 'No URL found' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server Error' });
  }
};

// 📤 Export both controllers
module.exports = { shortenUrl, redirectUrl };
