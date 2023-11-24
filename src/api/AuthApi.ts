import http from "@/axios/http";

export const login = (body: { userName: string; password: string }) =>
  http.post<>("/auth/login", body);
