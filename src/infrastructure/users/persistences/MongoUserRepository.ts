import { User } from '../../../domain/users/User'
import { UserRepository } from '../../../domain/users/UserRepository'
import { MongoRepository } from '../../shared/persistence/mongo/MongoRepository'

export class MongoUserRepository
  extends MongoRepository<User>
  implements UserRepository
{
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
