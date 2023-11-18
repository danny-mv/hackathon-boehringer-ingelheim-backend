import { injectable, inject } from 'tsyringe'
import { ObjectId } from 'mongodb'
import { User } from '../../domain/users/User'
import { UserRepository } from '../../domain/users/UserRepository'
import { UserRegisterSchema } from './schemas/userRegisterSchema'
import { hashPassword } from '../share/passwordHash'

@injectable()
export class UserRegister {
  constructor(
    @inject('UserRepository') private readonly repository: UserRepository
  ) {}

  async run({ name, email, password }: UserRegisterSchema): Promise<void> {
    const hashedPassword = await hashPassword(password)
    const id = new ObjectId().toHexString()
    const user = new User(id, name, email, hashedPassword)

    await this.repository.save(user)
  }
}
