import { Request, Response } from "express";

import { users } from "../db/users.db";

interface IUser {
  name: string;
  age: number;
  gender: string;
}

class UserController {
  public async findAll(
    req: Request,
    res: Response,
  ): Promise<Response<IUser[]>> {
    // return res.json(users);
    // тут описуємо помилку
    // тому що в потенційно-небезпечному коді це необхідно робити
    try {
    throw new Error("Something went wrong")
    return res.json(users);
    }
    catch (e) {
      return res.json({
        message: e.message,
        status: 400,
      });
  }
  public async create(req: Request, res: Response) {
    const user = req.body;
    users.push(user);

    res.status(201).json({ message: "Sponge Bob female created" });
  }
  public async updateById(req: Request, res: Response) {
    console.log(req.params);
    const { id } = req.params;
    const updatedSpongeBobInfo = req.body;

    users[+id] = updatedSpongeBobInfo;

    res.status(200).json({
      message: "Sponge Bob updated successfully",
    });
  }
  public async deleteById(req: Request, res: Response) {
    const { id } = req.params;

    users.splice(+id, 1);

    res.status(200).json({
      message: "Sponge Bob deleted successfully",
    });
  }
}

export const userController = new UserController();
