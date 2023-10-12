import clientModel from "../../models";
import { Request, Response } from "express";

export const getAllClientsUser = async (req: Request, res: Response) => {
  try {
    const usersClients = await clientModel.find({ user: req.params.id });
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
