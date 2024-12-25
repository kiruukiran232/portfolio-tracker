Portfolio Tracker Application

A Portfolio Tracker Application allows users to manage their stock holdings, track real-time portfolio value, and visualize portfolio performance through a responsive web interface.

Features

Frontend

Add, view, edit, and delete stock holdings.

Dashboard displaying:

Total portfolio value.

Top-performing stock.

Portfolio distribution.

Responsive and user-friendly interface built with React.

Backend

RESTful API with the following endpoints:

POST /stocks: Add a new stock.

GET /stocks: Fetch all stocks and calculate portfolio value.

PUT /stocks/{id}: Update stock details.

DELETE /stocks/{id}: Delete a stock.

Built with Java and Spring Boot.

Integrated with real-time stock price API for dynamic portfolio value calculation.

Database

MySQL database to store:

Stock name

Ticker symbol

Quantity

Buy price

Current price

Tech Stack

Frontend

React.js

Axios for API communication

Material-UI for styling

Backend

Spring Boot

JPA and Hibernate for database interactions

Database

MySQL

Deployment

Frontend: Deployed on Vercel/Netlify

Backend: Deployed on Render/Heroku/AWS

Project Setup

Prerequisites

Node.js and npm installed

Java JDK 11+

MySQL Server

IDE (e.g., VS Code, IntelliJ IDEA)

Frontend

Navigate to the portfolio-tracker folder.

Install dependencies:

npm install

Start the development server:

npm start

Open http://localhost:3000 in your browser.

Backend

Import the Spring Boot project into your IDE.

Configure MySQL database settings in application.properties:

spring.datasource.url=jdbc:mysql://localhost:3306/portfolio
spring.datasource.username=your_username
spring.datasource.password=your_password
spring.jpa.hibernate.ddl-auto=update

Run the application:

mvn spring-boot:run

Backend will run on http://localhost:8080.

API Endpoints

Base URL

http://localhost:8080/api/stocks

Endpoints

Method

Endpoint

Description

GET

/stocks

Fetch all stocks

POST

/stocks

Add a new stock

PUT

/stocks/{id}

Update stock by ID

DELETE

/stocks/{id}

Delete stock by ID

Real-Time Data Integration

Integrated with a free stock price API (e.g., Alpha Vantage, Yahoo Finance).

Fetches live stock prices for portfolio value calculation.

Assumes a quantity of 1 for all stocks in the initial portfolio.

Deployment

Frontend

Build the React app:

npm run build

Deploy the build/ folder to Vercel or Netlify.

Backend

Deploy the Spring Boot JAR to Render, Heroku, or AWS.

Ensure database connection settings are updated for production.

How to Use

Navigate to the deployed frontend URL.

Add stock details using the form (name, ticker, quantity, buy price).

View and manage stock holdings from the dashboard.

Monitor total portfolio value updated in real-time.

Assumptions and Limitations

The initial portfolio is populated with five random stocks (quantity: 1 each).

Only basic stock details (name, ticker, buy price) are stored in the database.

Real-time prices are fetched every time the portfolio is viewed.

Repository Links

Frontend Code: GitHub Link

Backend Code: GitHub Link

Deployed Links

Frontend: Live Link

Backend API: API Documentation

Feedback

Feel free to raise issues or suggest improvements via GitHub Issues.
