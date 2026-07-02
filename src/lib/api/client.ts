import { API_BASE_URL } from "@/lib/api/config";
import type { ApiErrorResponse } from "@/lib/api/types";

export class ApiError extends Error {
  constructor(
    public readonly status: number,
    public readonly body: unknown,
  ) {
    super(`API request failed with status ${status}`);
  }

  get apiBody() {
    return this.body as Partial<ApiErrorResponse>;
  }
}

export async function apiRequest<TResponse>(
  path: string,
  options: RequestInit = {},
): Promise<TResponse> {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    ...options,
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
      ...options.headers,
    },
  });

  const contentType = response.headers.get("content-type");
  const body =
    contentType?.includes("application/json") === true
      ? await response.json()
      : await response.text();

  if (!response.ok) {
    throw new ApiError(response.status, body);
  }

  return body as TResponse;
}

export function withBearerToken(
  token: string,
  options: RequestInit = {},
): RequestInit {
  return {
    ...options,
    headers: {
      ...options.headers,
      Authorization: `Bearer ${token}`,
    },
  };
}

export function getApiErrorMessage(error: unknown) {
  if (!(error instanceof ApiError)) {
    return "ارتباط با سرور برقرار نشد. لطفا دوباره تلاش کنید.";
  }

  const message = error.apiBody.message;

  if (Array.isArray(message)) {
    return message.join("، ");
  }

  if (typeof message === "string") {
    return message;
  }

  if (error.status === 401) {
    return "ایمیل یا رمز عبور نادرست است.";
  }

  if (error.status === 403) {
    return "حساب کاربری شما غیرفعال است.";
  }

  if (error.status === 409) {
    return "این ایمیل قبلا ثبت شده است.";
  }

  return "درخواست با خطا مواجه شد.";
}

export function getApiFieldErrors(error: unknown) {
  if (!(error instanceof ApiError)) {
    return {};
  }

  return (
    error.apiBody.errors?.reduce<Record<string, string>>((acc, item) => {
      acc[item.field] = item.messages.join("، ");
      return acc;
    }, {}) ?? {}
  );
}
