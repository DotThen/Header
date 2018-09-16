const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/spotify');

var db = mongoose.connection;
db.on('error', error => {
  console.error(error);
});
db.once('open', () => {
  console.log('MONGOOSE CONNECTED!');
});

var headerDBSchema = new mongoose.Schema({
  artistID: {
    type: Number,
    unique: true
  },
  followed: Boolean,
  artistName: String,
  followersNumber: Number,
  artistImages: [String],
  about: {
    Biography: String,
    Where: Object
  }
});

var HeaderDB = mongoose.model('HeaderDB', headerDBSchema);
module.exports = HeaderDB;

// NOTE: To be used later
// var userSchema = new mongoose.Schema({
//   userID: {
//     type: Number,
//     unique: true
//   },
//   userName: String,
//   artistsFollowing: Object
// });
