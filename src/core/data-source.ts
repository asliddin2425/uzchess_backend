import { DataSource } from "typeorm";

const AppDataSource = new DataSource({
    type: "postgres",
    url: process.env.DB_URL,
    entities: ["dist/**/*.entity.{ts,js}"],
    synchronize: true,
    logging: false,
})