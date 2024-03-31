const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  currentUser
} = require("../controllers/usersController");
const validateToken = require("../middleware/validateTokenHandler");

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: Endpoints related to user management
 */

/**
 * @swagger
 * /api/users/register:
 *   post:
 *     summary: Register a new user.
 *     description: Register a new user in the system.
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: User registered successfully
 */
router.post("/register", registerUser);

/**
 * @swagger
 * /api/users/login:
 *   post:
 *     summary: Login user.
 *     description: Login user to the system.
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: User logged in successfully
 */
router.post("/login", loginUser);

/**
 * @swagger
 * /api/users/current:
 *   get:
 *     summary: Get current user.
 *     description: Retrieve information about the current logged-in user.
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Successfully retrieved current user
 */
router.get("/current", validateToken, currentUser);

module.exports = router;
