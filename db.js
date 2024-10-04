const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Create a connection to the SQLite database
const db = new sqlite3.Database(path.resolve(__dirname, 'forexRates.db'), (err) => {
  if (err) {
    console.error('Error connecting to database', err);
  } else {
    console.log('Connected to SQLite database');
  }
});

// Create forex_rates table if it doesn't exist
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS forex_rates (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      currency_pair TEXT,
      rate REAL,
      date TEXT
    )
  `);
});

module.exports = db;
