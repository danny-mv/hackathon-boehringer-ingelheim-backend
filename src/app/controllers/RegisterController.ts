import { Request, Response } from 'express'
import { injectable, inject } from 'tsyringe'

import { Controller } from './Controller'
import { UserRegisterSchema } from '../../application/user/schemas/userRegisterSchema'
import { UserRegister } from '../../application/user/UserRegister'
import { HttpResponse } from '../routes/HttpResponse'

type RegisterRequest = Request & { body: UserRegisterSchema }

@injectable()
export class RegisterController implements Controller {
  constructor(
    @inject('UserRegister') private readonly userRegister: UserRegister
  ) {}

  async run(req: RegisterRequest, res: Response): Promise<void> {
    await this.userRegister.run(req.body)
    HttpResponse.NoContent(res)
  }
}
