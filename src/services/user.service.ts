import { IUser } from "../controllers/user.controller";
import { User } from "../models/user.model";

class UserService {
  public async findAll(): Promise<IUser[]> {
    return User.find();
  }
  public async create(data: IUser): Promise<IUser> {
    return User.create({ ...data }) as unknown as IUser;
  }
  public updateById(id: string, data: Partial<IUser>) {
    return User.findOneAndUpdate(
      { _id: id },
      { ...data },
      { returnDocument: "after" },
    );
  }
  public deletedById(id: string) {
    return User.findOneAndDelete({ _id: id }, { returnDocument: "after" });
  }
}
export const userService = new UserService();
