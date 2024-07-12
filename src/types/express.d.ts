import { Request } from "express";

export interface ErrorWithStatus extends Error {
  status: number | string;
}

export interface RequestWithDecodedToken extends Request {
  user: { id: string };
}
