import express, { Application, Request, Response } from "express";
import routes from './src/routes'

const app: Application = express();
const port = process.env.PORT;

// Body parsing Middleware
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