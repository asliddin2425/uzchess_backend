"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    url: process.env.DB_URL,
    entities: ["dist/**/*.entity.{ts,js}"],
    synchronize: true,
    logging: false,
});
