import models from "../../models";
import bcrypt from "bcryptjs";

export async function create(parentValue, { username, email, password }) {
  return await models.User.create({
    username,
    email,
    password
  });
}

export async function login(parentValue, { username, email, password }) {
  let user = await models.User.findOne({ where: { username } });
  bcrypt.compare(password, user.password).then(res => {
    return "userLogin";
  });
}
