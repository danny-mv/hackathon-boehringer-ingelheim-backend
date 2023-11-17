import z from 'zod'
import { userSchema } from '../../../domain/schemas/userSchema'

export const userLoginResSchema = userSchema.pick({
  id: true,
})

export type UserLoginRes = z.infer<typeof userLoginResSchema>
