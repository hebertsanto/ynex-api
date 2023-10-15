import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { config } from "dotenv";

config();

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  
  const header = req.headers["authorization"];
  const token = header && header.split(" ")[1];
  const secret = process.env?.SECRET_JWT || 'hash';

  if (!token) {
    return res.json({
      msg: "rota protegida você precisa fornecer o token de acesso",
    });
  }
  
  jwt.verify(token, secret, (error, decoded) => {
    if (error) {
      return res.json({
        msg: "o token não é mais válido, executar o login novamente."
      });
    }
  });

  next();
};
