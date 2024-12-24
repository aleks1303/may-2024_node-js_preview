// Middleware - перевіряє інформацію з користувачами чи взалалі валідний він чи ні
// чи справжній токен
// це перевірка перед контролером

// перевіряємо чи id валідний, чи є взагалі такий користувач з таким id
import { NextFunction, Request, Response } from "express";

class UserMiddleware {
  public async findByIdOrThrow(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
    } catch (e) {
      next(e);
    }
  }
}
export const userMiddleware = new UserMiddleware();
