import { BehaviorSubject } from "rxjs";
import { login as requestLogin } from "../api/own";
import jwt_decode from "jwt-decode";
import { z } from "zod";

const UserSchema = z.object({
    email: z.string(),
    sub: z.string()
})

type UserType = z.infer<typeof UserSchema>

export const $user = new BehaviorSubject<UserType|null>(null)
// export const $user = _user.asObservable

export const login = async (code: string) => {
    const token = await requestLogin(code)
    if (!token) return console.log("token", token);
    const decodedToken = jwt_decode(token)
    const result = UserSchema.safeParse(decodedToken)
    if(!result.success) return
    $user.next(result.data)
    localStorage.setItem("token", token)
}

export const logout = () => {
    localStorage.removeItem("token")
    $user.next(null)
}