import { Request, Response, NextFunction } from "express";
const work = (req: Request, res: Response, next: NextFunction): void => {
  console.log("Esta funcionando");
  next();
};

export default work;
