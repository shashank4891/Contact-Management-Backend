const swaggerJSDoc = require("swagger-jsdoc");

const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Contact Management API",
      version: "1.0.0",
      description: "API documentation for the Contact Management application",
    },
    servers: [
      {
        url: "http://localhost:5001", 
        description: "Local Development Server",
      },
      {
        url: "https://.onrender.com", 
        description: "Hosted Server",
      },
    ],
    tags: [
      { name: 'Home', description: 'Endpoint related to API homepage' },
      { name: 'Users', description: 'Endpoints related to users management' },
      { name: 'Contacts', description: 'Endpoints related to contacts management' },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer"
        },
      }
    }
  },
  apis: [
    "./server.js",
    "./routes/usersRoutes.js",
    "./routes/contactRoutes.js"
  ],
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);

module.exports = swaggerSpec;
