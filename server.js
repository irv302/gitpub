const express = require("express");
const app = express();
const drinks = require('./modles/drinks');
const food = require('./modles/drinks');
const port = 3000;

// start port at 3000
app.get("/", (req, res) => {
    res.send(`Welcome to the Gitpub App! Go to <a herf="/pub">localhost3000/pub</a> to get started!`)
});

// index
app.get("/drinks", (req, res) => {
    res.render('drinks_index.ejs', {totalDrinks : drinks})
});

app.get('/food', (req, res) => {
    res.render('food_index.ejs', {totalFood : food})
});

app.get("/drink/:id", (req, res) => {
    res.render(req.params.id);
});

app.get('/food/:id', (req, res) => {
    res.render(req.params.id);
});

app.get("/drinks/:id", (req, res) => {
    res.render("drinks_show.ejs", {drinks: drinks[req.params.id]});
});

app.get("/food/:id", (req, res) => {
    res.render("food_show.ejs", {food: food[req.params.id]});
});


app.get('/drinks/:id', (req, res) => {
    res.render('drinks_show.ejs', {drink: drinks[req.params.id]});
});


app.get("/food/:id", (req, res) => {
    res.render("food_show.ejs", {food: food[req.params.id]});
});

// listen to me dang it !
app.listen(port, (req, res) => {
    console.log(`Listening on port ${port}`)

});

