import clientModel from "../../models/clients";
import { Request, Response} from 'express';

export const deleteClientController = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
  
      const client = await clientModel.findByIdAndDelete(id);
  
      if (!client) {
        res
          .json({
            msg: "something went wrong",
          })
          .status(404);
      }
      res.json({
        msg: "client deleted successfully",
      });
    } catch (error) {
      return res
        .json({
          msg: "some error occured",
          error,
        })
        .status(400);
    }
  };
  