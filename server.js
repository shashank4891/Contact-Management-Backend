const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/dbConnection");
const errorHandler = require("./Middleware/errorHandler");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./swagger");

// Load environment variables
dotenv.config();

// Connect to database
connectDB();

const app = express();

// Middleware
app.use(express.json());

/**
 * @swagger
 * tags:
 *   name: Home
 *   description: Welcome to the home page of API.
 */

/**
 * @swagger
 * /:
 *   get:
 *     summary: Welcome to the main page of API
 *     description: Endpoint related to API homepage
 *     tags: [Home]
 *     responses:
 *       200:
 *         description: To test GET method
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Welcome to the MyContacts API!
 */


app.get("/", (req, res) => {
  res.send("Welcome to the My Contacts API!");
});

// Routes
app.use("/api/users", require("./routes/usersRoutes"));
app.use("/api/contacts", require("./routes/contactRoutes"));

// Swagger documentation
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));


app.use(errorHandler);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
