module.exports = {
  extends: [
    "plugin:prettier/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "simple-import-sort"],
  root: true,
  rules: {
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
  },
};

//eslint - шукає помилки і показує їх
// в нього є багато правил, які можна самостійно конфігурувати

//prettier - це форматор, він форматує код
// він форматуватиме код на основі тих правил які будуть описані в linter

// orm - це sql
// odm - це mongo
