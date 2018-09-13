const faker = require('faker');

module.exports = {
  artistID: 5,
  artistName: faker.name.findName(),
  followersNumber: Math.floor(Math.random() * 10000000),
  artistImages: ['https://loremflickr.com/320/240', 'https://loremflickr.com/320/240', 'https://loremflickr.com/320/240', 'https://loremflickr.com/320/240'],
  about: {
    Biography: faker.lorem.paragraphs(),
    Where: {
      [faker.address.city()]: Math.floor(Math.random() * 1000000),
      [faker.address.city()]: Math.floor(Math.random() * 1000000),
      [faker.address.city()]: Math.floor(Math.random() * 1000000),
      [faker.address.city()]: Math.floor(Math.random() * 1000000),
      [faker.address.city()]: Math.floor(Math.random() * 1000000)
    }
  }
};
