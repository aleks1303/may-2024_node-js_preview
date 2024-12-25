import { Router } from "express";

import { userController } from "../controllers/user.controller";
import { userMiddleware } from "../middlewares/user.middleware";

const router = Router();

router.get("/", userController.findAll);

// робимо post request на sponge bob
router.post("/", userController.create);

// оновлюємо одного з sponge по id
router.put("/:id", userMiddleware.findByIdOrThrow, userController.updateById);

// видаляємо одного з sponge по id
router.delete("/:id", userController.delete);
export const userRouter = router;
