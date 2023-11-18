import { MongoClient } from 'mongodb'
import { container } from 'tsyringe'
import { dbConfig } from './envs'
import { MongoUserRepository } from '../infrastructure/users/persistences/MongoUserRepository'
import { UserRepository } from '../domain/users/UserRepository'
import { UserRegister } from '../application/user/UserRegister'
import { RegisterController } from '../app/controllers/RegisterController'

export class DependencyInjection {
  public static async RegisterDependencies(): Promise<void> {
    await this.InstallMongoDependencies()
    this.InstallUserDependencies()
  }

  /**
   * Register dependencies for MongoDB
   */
  private static async InstallMongoDependencies(): Promise<void> {
    const mongoClient = new MongoClient(dbConfig.url)
    const client = await mongoClient.connect()
    container.registerInstance('MongoClient', client)
  }

  /**
   * Register dependencies for User
   */
  private static InstallUserDependencies(): void {
    // dependencies for user repository
    container.register<UserRepository>('UserRepository', {
      useClass: MongoUserRepository,
    })

    // dependencies for UserRegister
    container.register('UserRegister', { useClass: UserRegister })
    container.register('RegisterController', { useClass: RegisterController })
  }
}
