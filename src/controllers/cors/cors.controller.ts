import { Request, Response } from "express";
import corsService from "../../services/cors/cors.service";

class CorsController {
  async getCors(request: Request, response: Response) {
    const url = await corsService.corsRequest(request);

    return response.status(200).send(url);
  }
}

export default new CorsController();
