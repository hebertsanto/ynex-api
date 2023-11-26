import jwt from "jsonwebtoken";
import { config } from "dotenv";

config();

export const generateToken = (id: string | undefined ) => {
  const token = jwt.sign({ id }, process.env.SECRET_JWT || "faea50d55b245329cb0fb2a34b571a1a273eb508", {
    expiresIn: "30m",
  });
  return token.toString();
};

