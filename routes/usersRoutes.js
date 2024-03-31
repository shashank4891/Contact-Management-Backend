const express = require("express");
const router = express.Router();
const {
    getContacts,
    createContact, 
    getContact, 
    updateContact, 
    deleteContact
} = require("../controllers/contactController");
const validateToken = require("../Middleware/validateTokenHandler");

/**
 * @swagger
 * tags:
 *   name: Contacts
 *   description: Endpoints related to contact management
 */

/**
 * @swagger
 * /api/contacts:
 *   get:
 *     summary: Get all contacts.
 *     description: Retrieve all contacts from the database.
 *     tags: [Contacts]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Successfully retrieved contacts
 */
router.get("/", validateToken, getContacts);

/**
 * @swagger
 * /api/contacts:
 *   post:
 *     summary: Create a new contact.
 *     description: Create a new contact in the database.
 *     tags: [Contacts]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               phone:
 *                 type: string
 *     responses:
 *       201:
 *         description: Contact created successfully
 */
router.post("/", validateToken, createContact);

/**
 * @swagger
 * /api/contacts/{id}:
 *   get:
 *     summary: Get a contact by ID.
 *     description: Retrieve a contact from the database by its ID.
 *     tags: [Contacts]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the contact to retrieve
 *     responses:
 *       200:
 *         description: Successfully retrieved contact
 */
router.get("/:id", validateToken, getContact);

/**
 * @swagger
 * /api/contacts/{id}:
 *   put:
 *     summary: Update a contact by ID.
 *     description: Update a contact in the database by its ID.
 *     tags: [Contacts]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the contact to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               phone:
 *                 type: string
 *     responses:
 *       200:
 *         description: Contact updated successfully
 */
router.put("/:id", validateToken, updateContact);

/**
 * @swagger
 * /api/contacts/{id}:
 *   delete:
 *     summary: Delete a contact by ID.
 *     description: Delete a contact from the database by its ID.
 *     tags: [Contacts]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the contact to delete
 *     responses:
 *       200:
 *         description: Contact deleted successfully
 */
router.delete("/:id", validateToken, deleteContact);

module.exports = router;
