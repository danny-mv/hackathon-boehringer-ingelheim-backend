import { z } from '../../openapi/zod'

export const userSchema = z.object({
  id: z.string(),
  email: z.string().email().openapi({ example: 'user@example.cat' }),
  password: z.string().min(8),
  name: z.string().nonempty(),
})
