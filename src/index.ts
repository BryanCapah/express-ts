import express, { Application, Request, Response } from "express";
import cors from 'cors'
import dotenv from 'dotenv'
import routes from './routes'
import { sequelize } from "./databases";

import { Error as SequelizeError } from 'sequelize'
dotenv.config()
const app: Application = express();
const port = process.env.PORT;

app.use(cors({ origin: process.env.HOST }));
app.use(express.json());
app.use(express.raw());
app.use(express.urlencoded({ extended: true }));
try {
    app.listen(port, (): void => {
        sequelize.authenticate().then(async () => {
            console.log('database connected');

            try {
                await sequelize.sync({ force: true })
            }
            catch (e: any) {
                console.log(e.message);
                throw new SequelizeError()

            }

        }).catch((e: any) => {
            console.log(e.message);

        })
        console.log(`Connected successfully on port ${port}`);
    });
} catch (error: any) {
    console.error(`Error occured: ${error.message}`);
}

app.get("/",
    async (req: Request, res: Response): Promise<Response> => {
        return res.status(200).send({
            message: "Welcome to express js!",
        });
    }
);
app.use('/user', routes.users)