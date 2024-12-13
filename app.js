
//Modules
//Модуль - це окремий файл, який дає певний функціонал
// за допомогою певних синтаксичних конструкцій можемо затягувати в свій інший файл
// і використовувати наданий ним функціонал


// //import
// const { sayHello} = require('./test/helper');

// sayHello();


// Global variables - глобальні змінні
// Глобальна змінна це змінна яка доступна в будь-якому місці
// цілої аплікації
// Основні змінні це
// __dirname
// __filename
// process.cwd

// console.log('dirname', __dirname)
// console.log('filename',__filename)
// console.log('processCwd',process.cwd())
//
//
// sayHello();


// Module path
// цей модуль дозволяє зручно працювати зі шляхами

const path = require('path')
//
// // join - поєднює стрічки в гарний шлях з слеш і на різних системах
// // join - треба для того, щоб адекватно відкривалось на різних системах (мас, linux, windows)
// // mac, linux - / , windows - \ - це шляхи
// const joinedPath = path.join('test', 'test2', 'test3')
// console.log(joinedPath)
//
//
// // ще приклад
// const joinedPath1 = path.join(__dirname, 'test', 'helper.js')
// console.log(joinedPath1)
//
//
// // module normalize
// // нормалізує шлях - робить один слеш
// const normalizePath = path.normalize('//////test/////helper.js')
//
// console.log(normalizePath)



// // Module OS
// // Доступ до операційної системи
//
// const os = require('os')
// console.log(os.arch())
// console.log(os.cpus())


// Module FS
// Доступ до файлової системи
// Може читати, міняти, видаляти, міняти наповнення, додавати, редагувати файли

const fs = require('fs')
fs.readFile(path.join(__dirname, 'test', 'text.txt'),{ encoding: 'utf-8'} ,(err, data) => {
if (err) throw new Error();
    console.log(data)
})
fs.writeFile(path.join(__dirname, 'test', 'text2.txt'), 'Hello from Okten', {}, (err) => {
    if (err) throw new Error();
})
