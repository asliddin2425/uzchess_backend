import { Router, Request, Response} from "express";
import { Author } from "../entities/author.entity.js";
export const  authorRouter = Router()

authorRouter.get("/authors", async (req, res)=> {
    let authors = await Author.find();
    return res.status(200).json(authors)
})

authorRouter.get("/authors/:id", async (req, res)=>{
    let id = Number(req.params.id)
    let author = await Author.findOneBy({id: id});
    if(author){
        return res.status(200).json(author);
    } else {
        return res.status(404).send()
    }
})