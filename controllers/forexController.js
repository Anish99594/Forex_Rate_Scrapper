const db = require('../db');

// Get average conversion rate for a date range
exports.getAverageRate = (req, res) => {
  const { pair, startDate, endDate } = req.query;
  db.get(
    `SELECT AVG(rate) as averageRate FROM forex_rates WHERE currency_pair = ? AND date BETWEEN ? AND ?`,
    [pair, startDate, endDate],
    (err, row) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ averageRate: row.averageRate });
    }
  );
};

// Get closing conversion rate for a specific date
exports.getClosingRate = (req, res) => {
  const { pair, date } = req.query;
  db.get(
    `SELECT rate FROM forex_rates WHERE currency_pair = ? AND date = ? ORDER BY id DESC LIMIT 1`,
    [pair, date],
    (err, row) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ closingRate: row.rate });
    }
  );
};
