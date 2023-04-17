import { BehaviorSubject } from "rxjs";
import { login as requestLogin, $token, endSession } from "../api/own";
import jwt_decode from "jwt-decode";
import { z } from "zod";
import { $path, navigate } from "./routes";

const UserSchema = z.object({
  email: z.string(),
  sub: z.string(),
});

type UserType = z.infer<typeof UserSchema>;

const decodeUser = (token: string | null): UserType | null => {
  if (!token) return null;
  const decodedToken = jwt_decode(token);
  const result = UserSchema.safeParse(decodedToken);
  if (!result.success) return null;
  return result.data;
};

export const $user = new BehaviorSubject<UserType | null>(decodeUser($token.getValue()));
$token.subscribe(token => $user.next(decodeUser(token)))

export const login = async (code: string): Promise<void> => {
  const token = await requestLogin(code);
  const user = decodeUser(token);
  if (!user) return navigate("/");
  $user.next(user);
  navigate("/dashboard");
};

$path.subscribe((path) => {
  if (path === "/callback") {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const code = urlSearchParams.get("code");
    if (code) login(code);
  }
});

export const logout = () => {
  endSession()
  // other sessions to other apis
};
