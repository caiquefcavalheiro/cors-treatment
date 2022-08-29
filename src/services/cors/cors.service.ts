import { Request } from "express";
import fetch from "node-fetch";

class CorsService {
  async corsRequest(request: Request) {
    const url = request.query.url;

    if (url && typeof url == "string") {
      return await fetch(url, {
        headers: {
          "Access-Control-Allow-Credentials": "true",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, OPTIONS",
          "Acess-Control-Allow-Headers": "X-CSRF-TOKEN, X-Request-With",
        },
      }).then((response) => response.text());
    }
  }
}

export default new CorsService();
