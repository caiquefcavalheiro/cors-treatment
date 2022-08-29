import { Router } from "express";

import corsController from "../controllers/cors/cors.controller";

const corsRoutes = Router();

corsRoutes.get("/", corsController.getCors);

export default corsRoutes;
