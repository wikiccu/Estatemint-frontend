import { apiRequest, withBearerToken } from "@/lib/api/client";
import type {
  AuthResponse,
  LoginRequest,
  RegisterRequest,
  SafeUser,
} from "@/lib/api/types";

export function register(input: RegisterRequest) {
  return apiRequest<SafeUser>("/auth/register", {
    method: "POST",
    body: JSON.stringify(input),
  });
}

export function login(input: LoginRequest) {
  return apiRequest<AuthResponse>("/auth/login", {
    method: "POST",
    body: JSON.stringify(input),
  });
}

export function getCurrentUser(token: string) {
  return apiRequest<SafeUser>("/auth/me", withBearerToken(token));
}
