/**
 * Root Router
 * Manage redirection to Routers
 */

import express, { Request, Response } from "express"
import helloRouter from "./HelloRouter";
import { logInfo } from "../utils/logger";

let server = express()

let rootRouter = express.Router()

// Active for requests to http://localhost:8000/api

rootRouter.get('/', (req: Request, res: Response) => {
  logInfo('GET: http://localhost:8000/api/')

//send Goodbye world
  res.send("Welcome to App Express + TS + Swagger + Mongoose + Nodemon + Jest");
  })

//Redirections to Routers & controllers

server.use('/', rootRouter) //  http://localhost:8000/api --> rootRouter
server.use('/hello', helloRouter) //  http://localhost:8000/api/hello --> HelloRouter

export default server
