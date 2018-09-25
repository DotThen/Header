const mongoose = require('mongoose');
mongoose.connect(require('../config/mlab.js'));

const db = mongoose.connection;
db.on('error', error => {
  console.error(error);
});
db.once('open', () => {
  console.log('MONGOOSE CONNECTED!');
});

const headerDBSchema = new mongoose.Schema({
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

const HeaderDB = mongoose.model('HeaderDB', headerDBSchema);
module.exports = HeaderDB;

// NOTE: To be used later
// const userSchema = new mongoose.Schema({
//   userID: {
//     type: Number,
//     unique: true
//   },
//   userName: String,
//   artistsFollowing: Object
// });
