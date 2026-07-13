import express, { Application, Request, Response } from "express"
import cookieParser from "cookie-parser"
import cors from "cors"
import configIndex from "./config/config.index"


const app: Application = express()



// middleware 
app.use(cors({
    origin: configIndex.app_url,
    credentials: true
}))

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());




app.get("/", (req: Request, res: Response) => {
    res.send({ message: "Welcome to GearUP backend" })
})


export default app