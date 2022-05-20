const express = require("express");
const app = express();

const port = 3000;

// start port at 3000
app.get("/", (req, res) => {
    res.send("Welcome to the Gitpub App!")
})

// index
app.get("/drinks/:id", (req, res) => {
    res.render('index_drinks.ejs', drinks);
})

// listen to me dang it !
app.listen(3000, (req, res) => {
    console.log(`Listening on port`, 3000)

});

