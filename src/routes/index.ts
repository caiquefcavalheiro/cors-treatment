import { Express } from "express";
import corsRoutes from "./cors.routes";

export const appRoutes = (app: Express) => {
  app.use("/cors", corsRoutes);
};
