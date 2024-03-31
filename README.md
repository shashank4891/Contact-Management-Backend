# Contact Management Backend API

## Introduction

Welcome to the MyContacts Backend API! This is the backend API for managing contacts in the MyContacts application. It provides endpoints to perform CRUD operations on contacts stored in the database. The API is built using Node.js and Express framework.

## Hosted link

https://contact-management-backend-j0mk.onrender.com/api-docs/

## Table of Contents

1. [Introduction](#introduction)
2. [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
3. [Usage](#usage)
4. [API Endpoints](#api-endpoints)
5. [Authentication](#authentication)
6. [Contributing](#contributing)
7. [License](#license)

## Getting Started

### Prerequisites

Before running the API, ensure you have the following installed on your machine:

- Node.js
- MongoDB (or use a MongoDB cloud service)

### Installation

1. Clone this repository to your local machine.
2. Install the dependencies using `npm install`.

## Usage

Once the dependencies are installed, you can run the server using `npm start`.

## API Endpoints

### Contacts

- `GET /api/contacts`: Retrieve all contacts.
- `POST /api/contacts`: Create a new contact.
- `GET /api/contacts/:id`: Retrieve a contact by ID.
- `PUT /api/contacts/:id`: Update a contact by ID.
- `DELETE /api/contacts/:id`: Delete a contact by ID.

### Users

- `POST /api/users/register`: Register a new user.
- `POST /api/users/login`: Log in an existing user.

For detailed information on each endpoint, refer to the Swagger documentation provided in the API.

## Authentication

User registration and login are done using JWT (JSON Web Tokens) for authentication. Upon successful login, a JWT token is generated and returned to the client, which is used for subsequent requests to protected endpoints.

## Swagger Documentation

The API is fully documented using Swagger, providing comprehensive information about each endpoint, including descriptions, request/response schemas, and authentication requirements. Swagger documentation makes it easy to understand and interact with the API, allowing developers to quickly integrate it into their projects. You can explore the API endpoints, test them, and understand their functionality using the Swagger UI.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, feel free to open an issue or create a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
