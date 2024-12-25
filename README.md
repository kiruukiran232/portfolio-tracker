# Portfolio Tracker Application

A **Portfolio Tracker Application** allows users to manage their stock holdings, track real-time portfolio value, and visualize portfolio performance through a responsive web interface.

---

## **Features**

### Frontend
- Add, view, edit, and delete stock holdings.
- Dashboard displaying:
  - Total portfolio value.
  - Top-performing stock.
  - Portfolio distribution.
- Responsive and user-friendly interface built with React.

### Backend
- RESTful API with the following endpoints:
  - **`POST /stocks`**: Add a new stock.
  - **`GET /stocks`**: Fetch all stocks and calculate portfolio value.
  - **`PUT /stocks/{id}`**: Update stock details.
  - **`DELETE /stocks/{id}`**: Delete a stock.
- Built with Java and Spring Boot.
- Integrated with real-time stock price API for dynamic portfolio value calculation.

### Database
- MySQL database to store:
  - Stock name
  - Ticker symbol
  - Quantity
  - Buy price
  - Current price

---

## **Tech Stack**

### Frontend
- React.js
- Axios for API communication
- Material-UI for styling

### Backend
- Spring Boot
- JPA and Hibernate for database interactions

### Database
- MySQL

### Deployment
- **Frontend**: Deployed on Vercel/Netlify
- **Backend**: Deployed on Render/Heroku/AWS

---

## **Project Setup**

### Prerequisites
- Node.js and npm installed
- Java JDK 11+
- MySQL Server
- IDE (e.g., VS Code, IntelliJ IDEA)

### Frontend
1. Navigate to the `portfolio-tracker` folder.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```
4. Open `http://localhost:3000` in your browser.

### Backend
1. Import the Spring Boot project into your IDE.
2. Configure MySQL database settings in `application.properties`:
   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/portfolio
   spring.datasource.username=your_username
   spring.datasource.password=your_password
   spring.jpa.hibernate.ddl-auto=update
   ```
3. Run the application:
   ```bash
   mvn spring-boot:run
   ```
4. Backend will run on `http://localhost:8080`.

---

## **API Endpoints**

### Base URL
`http://localhost:8080/api/stocks`

### Endpoints
| Method | Endpoint         | Description                |
|--------|------------------|----------------------------|
| GET    | `/stocks`        | Fetch all stocks          |
| POST   | `/stocks`        | Add a new stock           |
| PUT    | `/stocks/{id}`   | Update stock by ID        |
| DELETE | `/stocks/{id}`   | Delete stock by ID        |

---

## **Real-Time Data Integration**

- Integrated with a free stock price API (e.g., Alpha Vantage, Yahoo Finance).
- Fetches live stock prices for portfolio value calculation.
- Assumes a quantity of `1` for all stocks in the initial portfolio.

---

## **Deployment**

### Frontend
1. Build the React app:
   ```bash
   npm run build
   ```
2. Deploy the `build/` folder to Vercel or Netlify.

### Backend
1. Deploy the Spring Boot JAR to Render, Heroku, or AWS.
2. Ensure database connection settings are updated for production.

---

## **How to Use**

1. Navigate to the deployed frontend URL.
2. Add stock details using the form (name, ticker, quantity, buy price).
3. View and manage stock holdings from the dashboard.
4. Monitor total portfolio value updated in real-time.

---

## **Assumptions and Limitations**
- The initial portfolio is populated with five random stocks (quantity: 1 each).
- Only basic stock details (name, ticker, buy price) are stored in the database.
- Real-time prices are fetched every time the portfolio is viewed.

---

## **Repository Links**

- **Frontend Code**: [GitHub Link](#)
- **Backend Code**: [GitHub Link](#)

---

## **Deployed Links**

- **Frontend**: [Live Link](#)
- **Backend API**: [API Documentation](#)

---

## **Feedback**
Feel free to raise issues or suggest improvements via GitHub Issues.

