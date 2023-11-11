import express from "express";
const router = express.Router();
import { getAllClientsController } from "../controller/colaborator/getAllClients.controller";
import { getAClientController } from "../controller/colaborator/getClient.controller";
import { createClientController } from "../controller/colaborator/createClient.controller";
import { updateClientController } from "../controller/colaborator/updateClient.controller";
import { deleteClientController } from "../controller/colaborator/deleteClient.controller";
import { CreateUser } from "../controller/user/createUser";
import { getAllClientsUser } from "../controller/user/getAllClintesUser";
import { Login } from "../auth/login/index.";
import { authMiddleware } from "../jwt/auth";

router.get("/clients", authMiddleware, getAllClientsController);
router.get("/client/:id", authMiddleware, getAClientController);
router.post("/clients", authMiddleware, createClientController);
router.put("/client/:id", authMiddleware, updateClientController);
router.delete("/client/:id", authMiddleware, deleteClientController);
router.get("/user/:id", authMiddleware, getAllClientsUser);
router.post("/user", CreateUser);
router.post("/login", Login);

export default router;
