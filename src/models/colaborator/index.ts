import mongoose from "mongoose";
import { Schema } from "mongoose";

const clientModel = new Schema({
  name: {
    type: "string",
    required: true,
  },
  email: {
    type: "string",
    required: true,
  },
  cep: {
    type: "string",
    required: true,
  },
  address: {
    type: "string",
    required: true,
  },
  phoneNumber: {
    type: "string",
    required: true,
  },
  cpf:{
    required:true,
    type: "string",
  },
  rg:{
    required:true,
    type: "string",
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

export default mongoose.model("Client", clientModel);
