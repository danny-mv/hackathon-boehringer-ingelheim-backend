import { Request, Response, Router } from 'express'

import { MongoClient } from 'mongodb'
import { UserRegister } from '../../../application/user/UserRegister'
import { MongoUserRepository } from '../../../infrastructure/users/persistences/MongoUserRepository'
import { MClient } from '../../../infrastructure/shared/persistence/mongo/MClient'
import { dbConfig } from '../../../infrastructure/shared/config'
import { RegisterController } from '../../controllers/RegisterController'

export const register = (router: Router): void => {
  const client = new MongoClient(dbConfig.url)
  const mClient = new MClient(mongo)
  const mongoUserRepository = new MongoUserRepository(mClient)
  const playerCreator = new UserRegister(mongoUserRepository)
  const userCtrl = new RegisterController(playerCreator)
  router.post(
    '/register',
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    async (req: Request, res: Response) => await userCtrl.run(req, res)
  )
}
