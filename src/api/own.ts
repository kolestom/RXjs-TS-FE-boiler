import axios from "axios"
import { z } from "zod"

const client = axios.create({baseURL: "http://localhost:8000"})


const ResponseSchema = z.object({token: z.string()})
// type ResponseType = z.infer<typeof ResponseSchema>

export const login = async(code: string): Promise<string | null>=>{
    try {

        const response = await client.post('/api/login', {code})
        const result = ResponseSchema.safeParse(response.data)
        if (!result.success) return null
        return response.data.token
    }catch (err) {
        return null
    }
}