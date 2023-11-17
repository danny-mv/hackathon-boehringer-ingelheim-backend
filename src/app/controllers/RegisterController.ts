import { Request, Response } from 'express'

import { Controller } from './Controller'
import { UserRegisterSchema } from '../../application/schemas/users/userRegisterSchema'
import { UserRegister } from '../../application/user/UserRegister'
import { HttpResponse } from '../routes/HttpResponse'

type RegisterRequest = Request & { body: UserRegisterSchema }

export class RegisterController implements Controller {
  constructor(private readonly userRegister: UserRegister) {}
  async run(req: RegisterRequest, res: Response): Promise<void> {
    await this.userRegister.run(req.body)
    HttpResponse.NoContent(res)
    throw new Error('Method not implemented.')
  }
}
