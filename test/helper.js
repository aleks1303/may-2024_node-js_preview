function sayHello ()  {
    console.log('Hello from helper.js')

    console.log('dirname', __dirname)
    console.log('filename',__filename)
    console.log('processCwd',process.cwd())
}

module.exports = {
   sayHello,
}