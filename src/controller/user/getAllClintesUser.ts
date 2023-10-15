import clientModel from "../../models/clients";
import userModel from "../../models/user";
import { Request, Response } from "express";

export const getAllClientsUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const usersClients = await clientModel.find({ user: id });
    const user = await userModel.findById(id);
      return res.json({
        msg: "clintes de usuários",
        user: user,
        clientsUser: usersClients,
      });

  } catch (err) {
    return res.json({
      err
    });
  }
};
