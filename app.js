const express = require("express");
const path = require('path')
const fs = require("fs");
const app = express();
const port = 80;

app.use('/static', express.static('static'))  // for serving a static file
app.use(express.urlencoded())  // jo form ka data aarha ha usko express takk laane k liye use hota ha.



// pug specific stuff/configuration

app.set('view engine', 'pug')   // set the template engine as pug

app.set('views', path.join(__dirname, 'views'))   // set the views directory



// PUG End Points
app.get('/', (req, res) =>{
    const con = 'THIS IS THE BEST CONTENT SO FAR'
    const params ={title : 'ARBII.xD MOTOR TRAINING CENTER', content : con} 
    res.status(200).render('index.pug', params)
})
app.post('/', (req, res)=>{
    name = req.body.name
    age = req.body.age
    gender = req.body.gender
    DrivingMove = req.body.DrivingMove
    FavouriteCar = req.body.FavouriteCar
    address = req.body.address
    more = req.body.more


    let outputToWrite = `the name of the client is ${name}, ${age} years old, ${gender}, residing at ${address}. More about him/her: ${more}, most favaoourite driving move is : ${DrivingMove}, favourite car of his/her is : ${FavouriteCar}`
    fs.writeFileSync('output.txt', outputToWrite)
    const params = {'message': 'Your form has been submitted successfully'}
    
    res.status(200).render('index.pug', params);
})


app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});
