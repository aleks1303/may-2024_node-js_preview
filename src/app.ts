import express, { NextFunction, Request, Response } from "express";
import * as mongoose from "mongoose";

import { ErrorApi } from "./errors/error.api";
import { userRouter } from "./routers/user_router";

const app = express();

// це необхідно для того, щоб express міг приймати post request та інші запити.
// це налаштування, щоб express могла читати json
app.use(express.json());
// цей метод вчить express  читати queryParams
app.use(express.urlencoded({ extended: true }));

app.use("/users", userRouter);

// в app описуємо перехопник помилок які прилітають з різних методів і рівнів
// app використовую

app.use((err: ErrorApi, req: Request, res: Response, next: NextFunction) => {
  res.status(err?.status || 500).json({
    massege: err.message,
    status: err?.status || 500,
  });
});

// звертаємось до app і задаємо, щоб вона приймала звернення
const PORT = 5000;
app.listen(PORT, () => {
  mongoose.connect("mongodb://127.0.0.1:27017/preview");
  console.log(`Server has started on PORT ${PORT}`);
});

//На порту 5000 працює server
//Браузер може робити тільки GET запити
