const express = require('express');
const cron = require('node-cron');
const { scrapeForexRates } = require('./services/scraperService');
const forexRoutes = require('./routes/forexRoutes');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Schedule the job to scrape forex rates every day at 6 AM
cron.schedule('0 6 * * *', scrapeForexRates);

// Set up API routes
app.use('/api/forex', forexRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
