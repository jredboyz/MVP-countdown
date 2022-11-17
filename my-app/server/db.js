/* eslint-disable no-unused-vars */
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/countdown')
  .catch(error => console.log(error));

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  gender: String,
  weight: Number,
  height: Number,
  activityLevel: String
});

const userModel = mongoose.model('User', userSchema)

//QUERIES
const addUpdateUser = (obj, callback) => {
  const filter = {name: obj.name};
  const update = obj;
  userModel.findOneAndUpdate(filter, update, {
    upsert: true,
    returnDocument: "after"
  }, (err, res) => {
    if (err) { console.log(err, 'ERROR IN addUpdateUser from db.js') }
    else { callback(null, res) }
  })
}

const getUser = (obj, callback) => {
  userModel.find(obj, (err, res) => {
    if (err) { console.log(err, 'ERROR in getUser') }
    else { callback(null, res) }
  })
}


module.exports = {
  addUpdateUser,
  getUser
}