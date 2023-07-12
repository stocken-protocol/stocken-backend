import { User } from '../domain/user'

export interface UserRepositoryInterface {
  getById(userId: string): Promise<User | null>
}
