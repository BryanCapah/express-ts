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

interface ILaptop {
    name: string
    series: number | string
    years: number
}

class Laptop implements ILaptop {
    name: string
    series: number | string
    years: number

    constructor({ name, series, years }: ILaptop) {
        this.name = name
        this.series = series
        this.years = years
    }

}

interface IAsus {
    series: number | string,
    years: number
}

class Asus extends Laptop {
    constructor({ series, years }: IAsus) {
        super({ name: 'Asus', series, years })
    }

}

class ZenBook extends Asus {
    constructor({ years }: { years: number }) {
        super({ series: 'Zenbook', years })
    }
}

const zenBook = new ZenBook({ years: 2001 })
console.clear()
console.log(zenBook);

const laptopZenbook = (): IAsus => {
    return {
        series: "Zenbook",
        years: 2001
    }
}
const ttt = async (): Promise<IAsus> => {
    const test: IAsus = await laptopZenbook()
    console.log(test);
    return test

}

ttt()
