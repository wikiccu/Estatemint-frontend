import { API_BASE_URL, AUTH_TOKEN_STORAGE_KEY } from "@/lib/api/config";
import type { ApiResponse } from "@/lib/api/types";

type RequestOptions = RequestInit & {
  auth?: boolean;
};

function getStoredToken() {
  if (typeof window === "undefined") {
    return null;
  }

  return window.localStorage.getItem(AUTH_TOKEN_STORAGE_KEY);
}

export async function apiFetch<T>(
  path: string,
  { auth = false, headers, ...options }: RequestOptions = {},
): Promise<ApiResponse<T>> {
  const token = auth ? getStoredToken() : null;

  const response = await fetch(`${API_BASE_URL}${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...headers,
    },
  });

  const payload = await response.json().catch(() => null);

  if (!response.ok) {
    return {
      success: false,
      message: payload?.message ?? "درخواست با خطا مواجه شد.",
      statusCode: response.status,
      errors: payload?.errors,
    };
  }

  return {
    success: true,
    data: payload as T,
    message: payload?.message,
  };
}
