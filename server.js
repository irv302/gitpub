const express = require("express");
const app = express();
const drinks = require('./modles/drinks');
const port = 3000;

// start port at 3000
app.get("/", (req, res) => {
    res.send("Welcome to the Gitpub App!")
})

// index
app.get("/drinks", (req, res) => {
    res.render('drinks_index.ejs', {allDrinks : drinks})
});

app.get("/drink/:id", (req, res) => {
    res.send(req.params.id)
})


// listen to me dang it !
app.listen(port, (req, res) => {
    console.log(`Listening on port`, 3000)

});

