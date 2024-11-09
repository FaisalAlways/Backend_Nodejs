const express = require('express');
const app = express();

const userModel = require('./usermodel');

app.get('/', (req, res) =>{
<<<<<<< HEAD
    res.send('Faisal');
=======
    res.send('Hi Faisal');
>>>>>>> 27770c817bf7906345780a4839cfecbef4087942
});

app.get('/create', async (req, res) => {
    let createdUser = await userModel.create({
        name: "Faisal",
<<<<<<< HEAD
        email: "faisalhossain7474@gmail.com",
=======
        email: "faisalhossain@gmail.com",
>>>>>>> 27770c817bf7906345780a4839cfecbef4087942
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

<<<<<<< HEAD
app.listen(5000, function(){
    console.log("server is still running on port 000");
=======
app.listen(4000, function(){
    console.log("server is still running on port 4000");
>>>>>>> 27770c817bf7906345780a4839cfecbef4087942
    
});