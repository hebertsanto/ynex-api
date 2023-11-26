import bcrypt from "bcrypt";

export const hashPassword = async (password: string) => {
  try {
    const hash = bcrypt.hash(password, 10);
    return hash;
  } catch (e) {
    console.log(e, "some arror occurred");
  }
};
