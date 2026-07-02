export type UserRole = "BUYER" | "SELLER" | "AGENT" | "ADMIN";

export type SafeUser = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: UserRole;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
};

export type RegisterRequest = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
};

export type LoginRequest = {
  email: string;
  password: string;
};

export type AuthResponse = {
  accessToken: string;
  user: SafeUser;
};

export type ApiErrorResponse = {
  statusCode: number;
  error: string;
  message: string | string[];
  path: string;
  timestamp: string;
  errors?: Array<{
    field: string;
    messages: string[];
  }>;
};

export type ApiRootResponse = {
  name: string;
  version: string;
  status: "ok";
  docs: string;
  health: string;
};
