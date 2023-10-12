import clientModel from "../../models/clients";
import { Request, Response } from "express";

export const getAllClientsUser = async (req: Request, res: Response) => {
  try {
    const usersClients = await clientModel.find({ user: req.params.id });

    if (usersClients.length === 0) {
      return res.json({
        msg: "no clients found",
      });
    }
    res
      .json({
        msg: "clintes de usuários",
        usersClients,
      })
      .status(201);
  } catch (err) {
    return res.json({
      msg: "error",
      err,
    });
  }
};
