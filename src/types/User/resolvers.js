import models from "../../models";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken'
import { APP_SECRET } from '../../utils'

const resolvers = {
  mutations: {
    signup,
    login
  }
}

async function signup(parent, args, context, info) {
  const user = await models.User.create({
    username: args.username,
    email: args.email,
    password: args.password
  });

  const token = jwt.sign({ userId: user.id }, APP_SECRET)

  return {
    token,
    user,
  }
}


async function login(parent, args, context, info) {
  const user = await models.User.findOne({ where: { email: args.email } })
  if (!user) {
    throw new Error(`Could not find user with email: ${args.email}`)
  }

  const valid = await bcrypt.compare(args.password, user.password)
  if (!valid) {
    throw new Error('Invalid password')
  }

  const token = jwt.sign({ userId: user.id }, APP_SECRET)

  return {
    token,
    user,
  }
}

export default resolvers




