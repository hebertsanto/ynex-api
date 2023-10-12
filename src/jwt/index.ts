import jwt from "jsonwebtoken";
import { config } from "dotenv";
config();

const generateToken = (id) => {
  const token = jwt.sign({ id }, process.env.SECRET_JWT || "algumsegredi", {
    expiresIn: "1m",
  });
  return token.toString();
};

export default generateToken;
