import modelClient from '../../models'
import { Request, Response } from 'express'

export const getAllClients = async (req : Request, res: Response) => {
    try{
        const clients = await modelClient.find();
        res.json({
        msg: 'all clients here',
        clients
        })
    }catch(error){
      res.json({
        msg:'some error occured',
      }).status(400)
    }
}

export const addClient = async(req: Request, res: Response) => {

    const { 
        name,
        email,
        cep,
        address,
        phoneNumber,
    } = req.body;

    const createClient = await modelClient.create({
        name,
        email,
        cep,
        address,
        phoneNumber
    })
    res.json({
        msg:'add client successfully',
        createClient
    }).status(201)
    
    try{
      
    }catch(error){
        return  res.json({
            msg:'some error occured',
          }).status(400);
    }
}

export const editClient = async(req : Request, res : Response) => {
    try{
      const { id } = req.params;

      const edit = await modelClient.findByIdAndUpdate(id, req.body);
      
      if(!edit){
         return res.json({
          msg: 'something went wrong'
         })
      }

      res.json({
        msg: 'edit successfully',
      }).status(201)
      
    }catch(error){
        return  res.json({
            msg:'some error occured',
            error
          }).status(400)
    }
}

export const deleteClient = async(req : Request, res : Response) => {
    try{
        const { id } = req.params;

        const client = await modelClient.findByIdAndDelete(id);
         
        if(!client){
            res.json({
             msg: 'something went wrong'
          }).status(404)
        }
        res.json({
            msg: 'client deleted successfully'
        })
    }catch(error){
        return   res.json({
            msg:'some error occured',
            error
          }).status(400);
    }
}