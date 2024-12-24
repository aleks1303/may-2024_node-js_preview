import { Router } from "express";

import { userController } from "../controllers/user.controller";

const router = Router();
// router - не займається бізнес-логікою
// router - приймає і прокидує запити - цей метод називається контроллер

// звертаємось до app і задаємо, щоб вона приймала звернення
router.get("/", userController.findAll);

// робимо post request на sponge bob
router.post("/", userController.create);

// оновлюємо одного з sponge по id
router.put("/:id", userController.updateById);

// видаляємо одного з sponge по id

router.delete("/:id", userController.deleteById);

export const userRouter = router;
