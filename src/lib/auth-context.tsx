"use client";

import {
  createContext,
  type ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { AUTH_TOKEN_STORAGE_KEY } from "@/lib/api/config";
import { getCurrentUser, login as loginRequest } from "@/lib/api/auth";
import type { LoginRequest, SafeUser } from "@/lib/api/types";

type AuthState = {
  accessToken: string | null;
  user: SafeUser | null;
  isAuthenticated: boolean;
  isBootstrapping: boolean;
  login: (input: LoginRequest) => Promise<void>;
  setAuthenticatedUser: (token: string, user: SafeUser) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthState | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [user, setUser] = useState<SafeUser | null>(null);
  const [isBootstrapping, setIsBootstrapping] = useState(true);

  const logout = useCallback(() => {
    window.localStorage.removeItem(AUTH_TOKEN_STORAGE_KEY);
    setAccessToken(null);
    setUser(null);
  }, []);

  const setAuthenticatedUser = useCallback((token: string, safeUser: SafeUser) => {
    window.localStorage.setItem(AUTH_TOKEN_STORAGE_KEY, token);
    setAccessToken(token);
    setUser(safeUser);
  }, []);

  const login = useCallback(
    async (input: LoginRequest) => {
      const auth = await loginRequest(input);
      setAuthenticatedUser(auth.accessToken, auth.user);
    },
    [setAuthenticatedUser],
  );

  useEffect(() => {
    let isMounted = true;

    async function bootstrapAuth() {
      const token = window.localStorage.getItem(AUTH_TOKEN_STORAGE_KEY);

      if (!token) {
        if (isMounted) {
          setIsBootstrapping(false);
        }
        return;
      }

      try {
        const safeUser = await getCurrentUser(token);

        if (isMounted) {
          setAccessToken(token);
          setUser(safeUser);
        }
      } catch {
        window.localStorage.removeItem(AUTH_TOKEN_STORAGE_KEY);

        if (isMounted) {
          setAccessToken(null);
          setUser(null);
        }
      } finally {
        if (isMounted) {
          setIsBootstrapping(false);
        }
      }
    }

    void bootstrapAuth();

    return () => {
      isMounted = false;
    };
  }, []);

  const value = useMemo<AuthState>(
    () => ({
      accessToken,
      user,
      isAuthenticated: Boolean(accessToken && user),
      isBootstrapping,
      login,
      setAuthenticatedUser,
      logout,
    }),
    [accessToken, isBootstrapping, login, logout, setAuthenticatedUser, user],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }

  return context;
}
