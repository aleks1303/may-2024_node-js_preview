const express = require('express');
const app = express();


// це необхідно для того, щоб express міг приймати post request та інші запити.
// це налаштування, щоб express могла читати json
app.use(express.json())
// цей метод вчить express  читати queryParams
app.use(express.urlencoded({extended:true}))

const PORT = 5000;

const spongeBob = [
    {
        name: 'Sponge Bob 1',
        age: 10,
        gender: 'male'
    },
    {
        name: 'Sponge Bob 2',
        age: 8,
        gender: 'male'
    },
    {
        name: 'Sponge Bob 3',
        age: 15,
        gender: 'male'
    },{
        name: 'Sponge Bob 4',
        age: 30,
        gender: 'male'
    },{
        name: 'Sponge Bob 5',
        age: 78,
        gender: 'male'
    }
]


// звертаємось до app і задаємо, щоб вона приймала звернення
app.get ('/spongebob', (req, res) => {

//щоб віддати клієнту якусь інформацію звертаємось до res
//     тут робиться запит (request) до db і при отриманні info виводимо

    res.json(spongeBob);
})

// робимо post request на sponge bob
app.post('/spongebob', (req, res) => {
    const spongebob6 = req.body
    spongeBob.push(spongebob6)

    res.status(201).json( { message:'Sponge Bob female created'})
})

// оновлюємо одного з sponge по id
app.put('/spongebob/:id', (req, res) => {
    console.log(req.params)
   const { id } = req.params;
   const updatedSpongeBobInfo = req.body

    spongeBob[+id] = updatedSpongeBobInfo;
   res.status(200).json({
       message:'Sponge Bob updated successfully',
       data:spongeBob[id]
   })
})


// видаляємо одного з sponge по id
app.delete('/spongebob/:id', (req, res) => {
    const { id } = req.params;

    spongeBob.splice(+id,1)
    res.status(200).json({
        message:'Sponge Bob deleted successfully',
    })
})




app.listen(PORT, () => {
    console.log(`Server has started on PORT ${PORT}` );
})

//На порту 5000 працює server
//Браузер може робити тільки GET запити
