// Middleware - перевіряє інформацію з користувачами чи взалалі валідний він, чи ні,
// чи справжній токен
// це перевірка перед контролером

// перевіряємо чи id валідний, чи є взагалі такий користувач з таким id
import { NextFunction, Request, Response } from "express";

import { users } from "../db/users.db";
import { ErrorApi } from "../errors/error.api";

class UserMiddleware {
  public async findByIdOrThrow(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const { id } = req.params;
      const user = users[+id];
      if (!user) {
        throw new ErrorApi("User not found", 404);
      }
      next();
    } catch (e) {
      next(e);
    }
  }
}
export const userMiddleware = new UserMiddleware();
