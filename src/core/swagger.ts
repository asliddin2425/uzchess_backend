import swaggerUI from "swagger-ui-express";
import swaggerJsDoc, {Options} from "swagger-jsdoc";
import {Express} from "express";
import { apiReference } from "@scalar/express-api-reference";

export function setupSwagger(app: Express) {
    const options: Options = {
        definition: {
            openapi: "3.0.0",
            info: {
                title: "Dars404",
                version: "v1.0.0",
                description: "API Documentation for Dars404"
            },
            servers: [
                {
                    url: "http://localhost:3000"
                }
            ]
        },
        apis: ["src/features/**/*.controller.ts"]
    };
    const swaggerSpec = swaggerJsDoc(options);
    
    // Swagger UI
    app.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));
    
    // Scalar API Reference
    app.use("/api-docs", apiReference({ url: "/openapi.json" }));
    
    // Serve OpenAPI spec
    app.get("/openapi.json", (req, res) => {
        res.json(swaggerSpec);
    });
}