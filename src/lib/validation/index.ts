import * as z from "zod"

export const SignupValidation = z.object({
    name: z.string().min(2, {message: "Too Short"}),
    username: z.string().min(2, {message: "Too Short"}),
    email: z.string().min(),
    password: z.string.min(8, {Message: "Password needs to be at least 8 characters"})

})
