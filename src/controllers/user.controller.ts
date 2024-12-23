import { Request, Response } from "express";

import { users } from "../db/users.db";

class UserController {
  public findAll(req: Request, res: Response) {
    res.json(users);
  }
}

export const userController = new UserController();
