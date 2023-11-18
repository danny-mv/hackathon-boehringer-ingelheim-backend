import { inject, injectable } from 'tsyringe'
import { MongoClient } from 'mongodb'
import { User } from '../../../domain/users/User'
import { UserRepository } from '../../../domain/users/UserRepository'
import { MongoBaseRepository } from '../../shared/persistence/mongo/MongoBaseRepository'

@injectable()
export class MongoUserRepository
  extends MongoBaseRepository<User>
  implements UserRepository
{
  constructor(@inject('MongoClient') client: MongoClient) {
    super(client)
  }

  save(user: User): Promise<void> {
    return this.persist(user.id, user)
  }
  search(userEmail: string): Promise<User | null> {
    throw new Error(`Not implanted ${userEmail}`)
  }

  protected collectionName(): string {
    return 'users'
  }
}
