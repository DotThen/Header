
const fs = require('fs');
const request = require('request');


let getImages = function(i) {
  const keywords = [ 'musician', 'singer', 'concert', 'band'];
  const randIndex = Math.floor(Math.random() * keywords.length);
  request
    .get(`https://loremflickr.com/900/600/${keywords[randIndex]}?random=${i}`)
    .on('error', function(err) {
      console.log(err);
    })
    .pipe(fs.createWriteStream(`./artistImages/${i}.jpg`));
};

for (let i = 1; i < 500; i++) {
  getImages(i);
}


