const mongoose =require('mongoose');

mongoose.connect("mongodb://localhost:27017/authtestapp");

const userSchema = mongoose.Schema({
    image: String,
    email: String,
    name: String,
    age: Number
})

module.exports = mongoose.model('user', userSchema);