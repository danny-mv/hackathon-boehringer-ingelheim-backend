import { Request, Response, Router } from 'express'
import { container } from 'tsyringe'
import { RegisterController } from '../../controllers/RegisterController'

export const register = (router: Router): void => {
  const userCtrl = container.resolve(RegisterController)
  router.post(
    '/register',
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    async (req: Request, res: Response) => await userCtrl.run(req, res)
  )
}
