import { Get, Query, Route, Tags} from "tsoa";
import { BasicResponse } from "./types";
import { IHelloController } from "./interfaces";
import { logSuccess } from '../utils/logger';
import { query } from "express";

@Route("/api/hello")
@Tags("HelloController")
export class HelloController implements IHelloController {
  /**
     * Endpoint to retreive a Message "Hello {name}" in JSON
     * @param name Name of user to be greeted
     * @returns { BasicResponse } Promise of Basicresponse
     */
    @Get("/")

  public async getMessage(@Query() name?: string): Promise<BasicResponse> {
    logSuccess('[/api/hello] Get Request')

    return {
      message:`Hello ${name || "Anonimus"}`

        }
        throw new Error("Method not implemented.");
    }
    
}


