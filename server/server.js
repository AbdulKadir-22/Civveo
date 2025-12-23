require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./app/db');
const waitlistRoutes = require('./app/routes');

const app = express();

// Middleware
app.use(cors()); // Allow frontend to communicate
app.use(express.json()); // Parse JSON bodies

// Connect to Database
connectDB();

// Routes
app.use('/api', waitlistRoutes);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});