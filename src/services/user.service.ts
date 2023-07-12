import { User } from '../domain/user'
import { UserRepositoryInterface } from '../infrastructure/user.repository-interface'

export class UserService {
  userRepository: UserRepositoryInterface

  constructor(userRepository: UserRepositoryInterface) {
    this.userRepository = userRepository
  }

  async getById(userId: string): Promise<User | null> {
    try {
      return await this.userRepository.getById(userId)
    } catch (error) {
      console.error('UserService: getById: ', error)
      throw new Error(error)
    }
  }
}
