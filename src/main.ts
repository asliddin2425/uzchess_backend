import "dotenv/config"
import "reflect-metadata"
import morgan from "morgan"

import express from "express"

const app = express();
app.use(morgan("dev"));

app.listen(3000, "0.0.0.0", ()=>console.log("Server is listening"))