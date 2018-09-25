const faker = require('faker');
let HeaderDB = require('./index.js');
faker.locale = 'en_US';

for (let i = 1; i <= 100; i++) {
  let newArtist = {
    artistID: i,
    artistName: faker.name.findName(),
    followed: Math.round(Math.random()) ? true : false,
    followersNumber: 'PLACE_HOLDER',
    verified: Math.round(Math.random() * 0.7 + 0.3) ? true : false,
    artistImages: [],
    about: {
      Biography: faker.lorem.paragraphs(faker.random.number({ min: 5, max: 10 }), '\n\n'),
      Where: {}
    }
  };
  var a = faker.random.number();
  // adding cities
  for (let i = 0; i < faker.random.number({ min: 80, max: 200 }); i++) {
    newArtist.about.Where[faker.address.city()] = faker.random.number({ min: 1000, max: 100000 });
  }

  // adding urls to s3;

  var obj = {};
  for (let i = 1; i <= faker.random.number({ min: 2, max: 10 }); i++) {
    obj[faker.random.number({ min: 1, max: 27 })] = null;
  }
  Object.keys(obj).forEach(num => {
    newArtist.artistImages.push(`https://s3-us-west-1.amazonaws.com/spotifycloneartists/photos/${num}.jpg`);
  });

  newArtist.followersNumber = Object.values(newArtist.about.Where).reduce((accumulator, currentValue) => accumulator + currentValue);
  HeaderDB.create(newArtist, function(err, newData) {
    err ? console.error(error) : console.log(newData);
  });
}
