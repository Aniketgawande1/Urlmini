// // const express = require('express');
// // const dotenv = require('dotenv');
// // const connectDB = require('./config/db');

// // // Load environment variables from .env file
// // dotenv.config();

// // // Connect to MongoDB
// // connectDB();

// // // Initialize express app
// // const app = express();

// // // Middleware to parse JSON
// // app.use(express.json());

// // // Import route files
// // const url = require('./routes/url');

// // // Define API routes
// // app.use('/api/url', url);

// // // Define a basic route
// // app.get('/', (req, res) => {
// //   res.send('URL Shortener API is running...');
// // });

// // // Define the port
// // const PORT = process.env.PORT || 5000;

// // // Start the server
// // app.listen(PORT, () => {
// //   console.log(`🚀 Server running on port ${PORT}`);
// // });
// const express = require('express');
// const dotenv = require('dotenv');
// const connectDB = require('./config/db');
// const cors = require('cors'); // Add this line

// // Load environment variables from .env file
// dotenv.config();

// // Connect to MongoDB
// connectDB();

// // Initialize express app
// const app = express();

// // CORS middleware - Add this before other middleware
// app.use(cors({
//   origin: process.env.FRONTEND_URL || 'http://localhost:5173', // Your Vite frontend URL
//   methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
//   allowedHeaders: ['Content-Type', 'Authorization']
// }));

// // Middleware to parse JSON
// app.use(express.json());

// // Import route files
// const url = require('./routes/url');

// // Define API routes
// app.use('/api/url', url);

// // Define a basic route
// app.get('/', (req, res) => {
//   res.send('URL Shortener API is running...');
// });

// // Define the port
// const PORT = process.env.PORT || 5000;

// // Start the server
// app.listen(PORT, () => {
//   console.log(`🚀 Server running on port ${PORT}`);
// });// Import required packages
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cors = require('cors'); // Enable CORS

// Load environment variables from .env file
dotenv.config();

// Connect to MongoDB
connectDB();

// Initialize express app
const app = express();

// CORS middleware - Ensures frontend can communicate with backend
app.use(
  cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:5173', // Vite frontend URL
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
);

// Middleware to parse incoming JSON requests
app.use(express.json());

// Import route files
const urlRoutes = require('./routes/url');

// Define API routes
app.use('/api/url', urlRoutes);

// Define a basic route to check API status
app.get('/', (req, res) => {
  res.send('✅ URL Shortener API is running...');
});

// Define the port (from .env or default to 5000)
const PORT = process.env.PORT || 5000;

// Start the server and listen on specified port
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
