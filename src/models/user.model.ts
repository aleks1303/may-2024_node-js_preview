// схема
//  описує які поля повинні бути у нашого користувача,
// якого зберігатимемо в db

// модель
// це прослойка між базою даних і нашою app,
// до якої звертаємось і яка надає зручні методи,
// для того, щоб комунікувати з db

import { model, Schema } from "mongoose";

export enum EGender {
  Male = "male",
  Female = "female",
  Other = "other",
}

const userSchema = new Schema(
  {
    name: {
      type: String,
    },
    age: {
      type: Number,
      min: 0,
      max: 199,
    },
    email: {
      type: String,
      unique: true,
      required: [true, "Email is required"],
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    gender: {
      type: String,
      enum: EGender,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const User = model("name", userSchema);

