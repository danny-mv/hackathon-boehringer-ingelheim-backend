import z from 'zod'
import { userSchema } from '../../../domain/schemas/userSchema'

export const userLoginReqSchema = userSchema.pick({
  email: true,
  password: true,
})

export type UserLoginReq = z.infer<typeof userLoginReqSchema>
