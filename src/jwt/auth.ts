import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { config } from "dotenv";

config();

interface CustomRequestOptions extends Request{
  id?: any;
}

export const authMiddleware = (req: CustomRequestOptions, res: Response, next: NextFunction) => {
  
  const header = req.headers["authorization"];
  const token = header && header.split(" ")[1];
  const secret = process.env?.SECRET_JWT || 'hash';

  if (!token) {
    return res.json({
      msg: "token not found",
    });
  }
  
  jwt.verify(token, secret, (error, decoded) => {
    if (error) {
      return res.json({
        msg: "this token is not valid"
      }).status(400);
    };

     req.id = decoded;
     next();
  });

  next();
};
