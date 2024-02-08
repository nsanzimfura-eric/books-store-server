const swaggerDocumentOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Library",
      version: "1.0.0",
      description: "RSA Data Collection",
    },
    servers: [
      {
        url: "/",
        description: "Api server",
      },
    ],
    schemes: ["HTTP", "HTTPS"],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
  },
  apis: ["./src/docs/*.docs.ts"],
};

export default swaggerDocumentOptions;
