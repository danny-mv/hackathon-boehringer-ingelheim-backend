import z from 'zod'
import { userSchema } from '../../../domain/schemas/userSchema'

export const userRegisterSchema = userSchema.pick({
  email: true,
  name: true,
  password: true,
})

export type UserRegisterSchema = z.infer<typeof userRegisterSchema>
