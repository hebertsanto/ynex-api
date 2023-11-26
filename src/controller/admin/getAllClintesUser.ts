import clientModel from "../../models/colaborator";
import userModel from "../../models/user";
import { Request, Response } from "express";

export const getAllClientsUser = async (req: Request, res: Response) => {

  const { id } = req.params;

  try {

    const usersClients = await clientModel.find({ user: id });
    const user = await userModel.findById(id);

      return res.json({
        msg: "all colaborator users",
        user: user,
        clientsUser: usersClients,
      }).status(200);

  } catch (err) {
    return res.json({
      err
    }).status(400);
  }
};
