
import express, { Request, Response } from "express";
import { HelloController } from "../controller/HelloController";
import { logInfo } from "../utils/logger";

// Router from Express

let helloRouter = express.Router()

//http://ocalhost:8000/api/hello?name=Martin/
    
    helloRouter.route('/')

    //GET
    .get(async(req:Request, res:Response) => {
        //obtain a Query Param value
        let name: any = req?.query?.name;
        logInfo(`query param: ${name}`);

        //controller instance

        const controller: HelloController = new HelloController();
        
        //obtain Response

        const response = await controller.getMessage(name);

        //send to th client the response
        return res.send(response);
    });

// Export Hello Router

    export default helloRouter
