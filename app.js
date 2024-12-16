const express = require('express');
const app = express();

const PORT = 5100;


// звертаємось до app і задаємо, щоб вона приймала звернення
app.get ('', () => {
    console.log('Hello World!');
})

app.listen(PORT, () => {
    console.log(`Server has started on PORT ${PORT}` );
})

//На порту 5000 працює server
//Браузер може робити тільки GET запити
