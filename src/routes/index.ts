import express from "express";
const router = express.Router();
import { getAllClientsController } from "../controller/clients/getAllClients.controller";
import { getAClientController } from "../controller/clients/getClient.controller";
import { createClientController } from "../controller/clients/createClient.controller";
import { updateClientController } from "../controller/clients/updateClient.controller";
import { deleteClientController } from "../controller/clients/deleteClient.controller";
import { CreateUser, getAllClientsUser } from "../controller/user/index";

router.get("/clients", getAllClientsController);
router.get("/client/:id", getAClientController);
router.post("/clients", createClientController);
router.put("/client/:id", updateClientController);
router.delete("/client/:id", deleteClientController);
router.post("/user", CreateUser);
router.get("/user/:id", getAllClientsUser);

export default router;

