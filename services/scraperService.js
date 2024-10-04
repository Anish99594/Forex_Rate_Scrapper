const axios = require('axios');
const cheerio = require('cheerio');
const db = require('../db');

// Scrape forex rates
async function scrapeForexRates() {
  try {
    const { data } = await axios.get('https://www.x-rates.com/');
    const $ = cheerio.load(data);
    const rates = [];

    // Sample scraping logic for x-rates.com - modify if necessary after inspecting site
    $('table.ratesTable tbody tr').each((index, element) => {
      const currencyPair = $(element).find('td:nth-child(1)').text().trim(); // Currency pair
      const rate = parseFloat($(element).find('td:nth-child(2)').text().trim()); // Conversion rate

      // Validate the scraped rate
      if (!isNaN(rate) && currencyPair) {
        rates.push({ currencyPair, rate, date: new Date().toISOString().split('T')[0] });
      }
    });

    if (rates.length === 0) {
      console.error('No rates were scraped, please check the selectors.');
      return;
    }

    // Save scraped rates to the database
    rates.forEach(({ currencyPair, rate, date }) => {
      db.run('INSERT INTO forex_rates (currency_pair, rate, date) VALUES (?, ?, ?)', [currencyPair, rate, date], function(err) {
        if (err) {
          console.error(`Error inserting ${currencyPair} into the database:`, err.message);
        }
      });
    });

    console.log('Forex rates scraped and saved.');
  } catch (error) {
    console.error('Error scraping forex rates:', error.message);
  }
}

module.exports = { scrapeForexRates };
