import express, { Express, Request, Response } from "express"; 
import dotenv from 'dotenv';

//configuration of env file
dotenv.config();

// create Express App

const app: Express = express();
const port: string | number = process.env.PORT || 8000;

// define first route of App

app.get("/", (req: Request, res: Response) => {
  //send Goodbye world
  res.send("App Express + TS + Swagger + Mongoose + Hola Caracola + Jest");
});


app.get("/bye", (req: Request, res: Response) => {
    //send Goodbye world
    res.status(200).send("Goodbye World");
  });

// Execute our App in PORT

app.listen(port, () =>
  console.log(`Express SERVER: Running at http://localhost:${port}`)
);
