import { Request, Response, Router } from "express";

import { users } from "../db/users.db";

const router = Router();

// звертаємось до app і задаємо, щоб вона приймала звернення
router.get("/", (req: Request, res: Response) => {
  //щоб віддати клієнту якусь інформацію звертаємось до res
  //     тут робиться запит (request) до db і при отриманні info виводимо
  res.json(users);
});

// робимо post request на sponge bob
router.post("/", (req: Request, res: Response) => {
  const user = req.body;
  users.push(user);

  res.status(201).json({ message: "Sponge Bob female created" });
});

// оновлюємо одного з sponge по id
router.put("/:id", (req: Request, res: Response) => {
  console.log(req.params);
  const { id } = req.params;
  const updatedSpongeBobInfo = req.body;

  users[+id] = updatedSpongeBobInfo;

  res.status(200).json({
    message: "Sponge Bob updated successfully",
  });
});

// видаляємо одного з sponge по id

router.delete("/:id", (req: Request, res: Response) => {
  const { id } = req.params;

  users.splice(+id, 1);

  res.status(200).json({
    message: "Sponge Bob deleted successfully",
  });
});

export const userRouter = router;
