import axios, { Axios, AxiosError, AxiosResponse } from "axios";
import { BehaviorSubject } from "rxjs";
import { z } from "zod";
import jwt_decode from "jwt-decode";

const client = axios.create({ baseURL: "http://localhost:8000" });

type Response = { // generic type + zod
  data: any,
  status: number
}

const request = async <T>(method: string, path: string, payload: T): Promise<Response> => {
    try {
      client.request({
        method,
        url: path,
        data: payload,
        headers: {
          Authorization: `Bearer: ${localStorage.getItem("token")}`,
        },
      })
      const response = await client.request({
        method,
        url: path,
        data: payload,
        headers: {
          Authorization: `Bearer: ${localStorage.getItem("token")}`,
        },
      })
      return {
        data: response.data,
        status: response.status
      }
    } catch (error) {
      const response = (error as AxiosError).response
      if (response?.status === 401) endSession()
      if (response) {
        return {
          data: response.data,
          status: response.status
        }
      }
      return {
        data: null,
        status: 0
      }
    }
  }

export const $token = new BehaviorSubject<string | null>(localStorage.getItem("token"))
export const endSession = () => {
    localStorage.removeItem("token")
    $token.next(null)
}

let tokenInterval: number | null = null
$token.subscribe(token => {
    if (tokenInterval)
        clearInterval(tokenInterval)
    tokenInterval = setInterval(() => {
        if (!token) return
        const decoded = jwt_decode(token) as any
        if (decoded.exp*1000 < new Date().getTime()) {
            endSession()
        }
    }, 1000)
})

const ResponseSchema = z.object({ token: z.string() });
// type ResponseType = z.infer<typeof ResponseSchema>

export const login = async (code: string): Promise<string | null> => {
  try {
    const response = await client.post("/api/login", { code });
    const result = ResponseSchema.safeParse(response.data);
    if (!result.success) return null;
    const token = response.data.token
    $token.next(token)
    localStorage.setItem("token", token)
    return token;
  } catch (err) {
    return null;
  }
};

export const getSecret = async () => {
  const response = await request("get", "/api/secret", null)
  console.log(response.data);
};

type Todo = {
  title: string,
  description: string
}

export const createTodo = async (todo: Todo) => {
  const response = await request("get", "/api/secret", todo)
  console.log(response.data);
};
