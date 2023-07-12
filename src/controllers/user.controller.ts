import { Request, Response } from 'express'

import { UserRepository } from '../infrastructure/user.repository'
import { UserService } from '../services/user.service'

const userRepository = new UserRepository()
const userService = new UserService(userRepository)

export const get = async (req: Request, res: Response) => {
  try {
    const { id: userId } = req.params

    const user = await userService.getById(userId)

    res.json({
      data: user,
    })
  } catch (error) {
    console.error('userController: getById: ', error)
    res.status(500).send(error.message)
  }
}
