const express = require('express');
const { request } = require('http');
const app = express();
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", function(req, res){
    res.render("index");
});
app.get("/:username", function(req, res){
    res.send(`Welcome, ${req.params.username}`);
});
app.get("/author/:username/:age", function(req, res){
    res.send(`Welcome, ${req.params.username} of age ${req.params.age}`);
});

app.listen(5000, function(){
    console.log("Server is working on port 5000")
});



