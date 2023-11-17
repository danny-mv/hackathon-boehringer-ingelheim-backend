import { User } from '../../domain/users/User'
import { UserRepository } from '../../domain/users/UserRepository'
import { UserRegisterSchema } from '../schemas/users/userRegisterSchema'
import { hashPassword } from '../share/passwordHash'

export class UserRegister {
  constructor(private readonly repository: UserRepository) {}

  async run({ name, email, password }: UserRegisterSchema): Promise<void> {
    const hashedPassword = await hashPassword(password)
    const user = new User(email, name, hashedPassword)

    await this.repository.save(user)
  }
}
