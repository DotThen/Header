const faker = require('faker');
let HeaderDB = require('./index.js');
faker.locale = 'en_US';

for (let i = 1; i <= 100; i++) {
  let newArtist = {
    artistID: i,
    artistName: faker.name.findName(),
    followersNumber: 'PLACE_HOLDER',
    artistImages: [
      'https://loremflickr.com/320/240/musician,hollywood,artist,singer/all',
      'https://loremflickr.com/320/240/musician,hollywood,artist,singer/all',
      'https://loremflickr.com/320/240/musician,hollywood,artist,singer/all',
      'https://loremflickr.com/320/240/musician,hollywood,artist,singer/all',
      'https://loremflickr.com/320/240/musician,hollywood,artist,singer/all',
      'https://loremflickr.com/320/240/musician,hollywood,artist,singer/all',
      'https://loremflickr.com/320/240/musician,hollywood,artist,singer/all',
      'https://loremflickr.com/320/240/musician,hollywood,artist,singer/all',
      'https://loremflickr.com/320/240/musician,hollywood,artist,singer/all',
      'https://loremflickr.com/320/240/musician,hollywood,artist,singer/all',
      'https://loremflickr.com/320/240/musician,hollywood,artist,singer/all'
    ].slice(0, Math.floor(Math.random() * 9 + 2)),
    about: {
      Biography: faker.lorem.paragraphs(),
      Where: {}
    }
  };
  // adding cities
  for (let i = 0; i < faker.random.number({ min: 80, max: 200 }); i++) {
    newArtist.about.Where[faker.address.city()] = faker.random.number({ min: 1000, max: 100000 });
  }
  newArtist.followersNumber = Object.values(newArtist.about.Where).reduce((accumulator, currentValue) => accumulator + currentValue);
  HeaderDB.create(newArtist, function(err, newData) {
    err ? console.error(error) : console.log(newData);
  });
}
