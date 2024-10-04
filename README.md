# Forex Rate Scraper and API

## Overview

This project is a Forex Rate Scraper and API that scrapes forex conversion rates from the web, stores the data in a SQLite database, and provides a RESTful API to retrieve average and closing conversion rates for specified currency pairs over given time periods. 

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Database Schema](#database-schema)
- [Error Handling and Logging](#error-handling-and-logging)
- [Contributing](#contributing)

## Features

- Scrapes forex conversion rates from a specified website daily at 6 AM.
- Stores historical forex rates in a SQLite database.
- Provides an API to retrieve:
  - Average conversion rates for specified currency pairs and date ranges.
  - Closing conversion rates for specified currency pairs on specific dates.
- Allows for the addition of new currency pairs for tracking via API.

## Technologies Used

- **Node.js**: JavaScript runtime for building the application.
- **Express**: Web framework for building the RESTful API.
- **Axios**: HTTP client for making requests to the forex rates website.
- **Cheerio**: Library for parsing and manipulating the HTML DOM.
- **SQLite**: Lightweight database for storing forex rates.
- **Cron**: Scheduling library for running tasks at specified intervals.
- **dotenv**: For managing environment variables.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/YOUR_USERNAME/Forex_rate_Scraper_API.git

2. Navigate into the project directory:
   cd Forex_rate_Scraper_API

3. Install the dependencies:
   npm install express axios sqlite3 cron dotenv cheerio

4. Create a .env file in the root directory and set up your environment variables (if needed).

## Usage

1. Start the application:
   node app.js

2. The API will be available at http://localhost:3000/api/forex.

## API Endpoints

Get Average Conversion Rate
  Endpoint: GET /api/forex/average
  Query Parameters:
    pair: Currency pair (e.g., USD/EUR)
    startDate: Start date in YYYY-MM-DD format
    endDate: End date in YYYY-MM-DD format
  Response:
    {
      "averageRate": <average_conversion_rate>
    }
  Get Closing Conversion Rate:
    Endpoint: GET /api/forex/closing
    Query Parameters:
      pair: Currency pair (e.g., USD/EUR)
      date: Date in YYYY-MM-DD format
  Response:
    {
      "closingRate": <closing_conversion_rate>
    }
  Add New Currency Pair (Optional)
    Endpoint: POST /api/forex/pairs
    Request Body:
      {
        "pair": "NEW_CURRENCY_PAIR"
      }
    Response:
      {
        "message": "Currency pair added successfully."
      }
## Database Schema
    
    Table: forex_rates
    id: INTEGER (Primary Key, Auto Increment)
    currency_pair: TEXT (e.g., USD/EUR)
    rate: REAL (Forex conversion rate)
    date: TEXT (Date of the rate in YYYY-MM-DD format)
## Error Handling and Logging
    
    The application includes error handling to log issues related to scraping and database insertion.
    Errors are logged to the console for easier debugging.
## Contributing
  
  Contributions are welcome! Please follow these steps to contribute:
  
    1. Fork the repository.
    2. Create a new branch
        git checkout -b feature/new-feature
    3. Make your changes and commit them:
        git commit -m "Add new feature"
    4. Push to the branch:
        git push origin feature/new-feature.






