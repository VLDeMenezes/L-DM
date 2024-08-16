import { Request, Response, NextFunction, request } from "express";
export const catchAsync = (controller: Function) => {
  return (req: Request, res: Response, next: NextFunction) => {
    controller(req, res, next).catch((err: any) => {
      res.status(500).json({ error: err.message });
      next(err);
    });
  };
};

export default catchAsync;
