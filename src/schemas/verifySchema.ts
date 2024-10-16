import {z} from 'zod'

export const verifySchema = z.object({
    code: z.string().length(8, 'Verification code must be 8 digits')
})