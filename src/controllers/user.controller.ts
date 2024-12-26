import { NextFunction, Request, Response } from "express";

import { users } from "../db/users.db";
import { userService } from "../services/user.service";

export interface IUser {
  name: string;
  age: number;
  gender: string;
}

class UserController {
  public async findAll(req: Request, res: Response, next: NextFunction) {
    try {
      const createdUser = await userService.create(req.body);
      res.status(201).json(createdUser);
    } catch (e) {
      // next - викидуємо помилку на рівень вище, а це в app і там перехоплюємо
      // це для того, щоб не описувати перехопник в кожному методі
      next(e);
    }
  }
  // тут не вийшо, вибиває помилку
  // код де може бути потенційна помилка
  // запобігаємо загрозі
  // public async findAll(
  //   req: Request,
  //   res: Response,
  // ): Promise<Response<IUser[]>> {
  //   try {
  //     throw new Error("Something went wrong");
  //     // return res.json(users)
  //   } catch (e) {
  //     return res.json({
  //       message: e.message,
  //       status: 400,
  //     });
  //   }
  // }

  public async create(req: Request, res: Response) {
    const spongebob6 = req.body;
    users.push(spongebob6);
    res.status(201).json({ message: "Sponge Bob female created" });
  }
  public async updateById(req: Request, res: Response, next: NextFunction) {
    try {
      const updatedUser = await userService.updateById(req.params.id, req.body);
      res.status(201).json(updatedUser);
    } catch (e) {
      next(e);
    }
    const { id } = req.params;
    const updatedSpongeBobInfo = req.body;

    users[+id] = updatedSpongeBobInfo;

    res.status(200).json({
      message: "Sponge Bob updated successfully",
    });
  }
  public async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const deleteUser = await userService.deletedById(req.params.id);
      res.status(200).json(deleteUser);
    } catch (e) {
      next(e);
    }
  }
}
export const userController = new UserController();
