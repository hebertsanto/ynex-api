import express from "express";
import { getAllClientsController } from '../controller/clients/getAllClients.controller'
import {  getAClientController } from '../controller/clients/getClient.controller'
import { createClientController } from '../controller/clients/createClient.controller'
import { updateClientController } from '../controller/clients/updateClient.controller'
import { deleteClientController } from '../controller/clients/deleteClient.controller'
const router = express.Router();

router.get("/clients", getAllClientsController);
router.get("/client/:id", getAClientController);
router.post("/clients", createClientController);
router.put("/client/:id", updateClientController);
router.delete("/client/:id", deleteClientController);

export default router;
