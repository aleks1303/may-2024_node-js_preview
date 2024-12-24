import express from "express";
import * as mongoose from "mongoose";

import { userRouter } from "./routers/user_router";
// import * as mongoose from "mongoose";

const app = express();

// це необхідно для того, щоб express міг приймати post request та інші запити.
// це налаштування, щоб express могла читати json
app.use(express.json());
// цей метод вчить express  читати queryParams
app.use(express.urlencoded({ extended: true }));

app.use("/users", userRouter);
// звертаємось до app і задаємо, щоб вона приймала звернення
const PORT = 5000;
app.listen(PORT, () => {
  mongoose.connect("mongodb://127.0.0.1:27017/preview");
  console.log(`Server has started on PORT ${PORT}`);
});

//На порту 5000 працює server
//Браузер може робити тільки GET запити
