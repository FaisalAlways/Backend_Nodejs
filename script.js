const express = require("express");

const app = express();

app.get("/", function (req, res) {
  res.send("people think coding is easy but");
});


app.use(function(rqe, res, next){
    console.log('middleware chala');
    next();
})

app.get("/about", function (req, res) {
  res.send("coding is not easy bro developer face many problem");
});

app.listen(1000);
