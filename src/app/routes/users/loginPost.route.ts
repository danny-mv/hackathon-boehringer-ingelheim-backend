import { Request, Response, Router } from 'express'

export const register = (router: Router): void => {
  router.post(
    '/login',
    async (req: Request, res: Response) => await userCtrl.run(req, res)
  )
}
