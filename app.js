const express = require('express');
const app = express();

const userModel = require('./usermodel');

app.get('/', (req, res) =>{
    res.send('Hi Faisal');
});

app.get('/create', async (req, res) => {
    let createdUser = await userModel.create({
        name: "Faisal",
        email: "faisalhossain@gmail.com",
        username: "faisal"
    });
    res.send([createdUser]);
});

app.get('/update', async (req, res) => {
    let updateduser = await userModel.findOneAndUpdate({username: "faisal"}, {name: "Faisal Hossain"}, {new: true}); 
   res.send(updateduser);
});

app.get('/read', async (req, res) => {
  let users = await userModel.find()
  res.send(users);
});

app.get('/delete', async (req, res) => {
  let users = await userModel.findOneAndDelete()
  res.send(users);
});

app.listen(4000, function(){
    console.log("server is still running on port 4000");
    
});