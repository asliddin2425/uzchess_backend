import "dotenv/config"
import "reflect-metadata"
import morgan from "morgan"
import {setupSwagger} from "./core/swagger.js"
import express from "express"
import {uploadsRouter} from "./features/uploads/controllers/uploads.controller.js"
import {AppDataSource} from "./core/data-source.js"
import { authorRouter } from "./features/courses/controllers/author.controller.js"
await AppDataSource.initialize();

const app = express();
app.use("/uploads", express.static("./uploads"))
app.use(morgan("dev"));
app.use(authorRouter)
app.use(uploadsRouter)
// app.use(err, req, res, next)=>{
//     if(err.message.startWith)
// }
setupSwagger(app);
app.listen(3000, "0.0.0.0", ()=>console.log("Server is listening"))