const fs = require ('fs');
const faker = require ('faker');
faker.locale = 'en_US';

let writeStuff = (writeStream, about, index) =>
  new Promise ((resolve, reject) => {
    writeStream.write (about, 'utf-8', () => {
      console.log (`generated ${index}`);
      writeStream.end (resolve);
    });
  });


let about;
const generateLoop = async () => {
   let start = 1;
   let stop = 100000;
   about = 'Biography,Location1,followersNumber1,Location2,followersNumber2,Location3,followersNumber3,Location4,followersNumber4\n'
   for (let i = 1; i < 101; i++){
    const generateData = () => {
      for (let i = start; i < stop + 1; i++) {
        about +=`${faker.lorem.paragraphs(1)},${faker.address.city()},${faker.random.number({ min: 1000, max: 100000 })},${faker.address.city()},${faker.random.number({ min: 1000, max: 100000 })},${faker.address.city()},${faker.random.number({ min: 1000, max: 100000 })}` + '\n'
      }
    }
    generateData()
    let writeStream = fs.createWriteStream (`./artistBio${i}.csv`);
    await writeStuff (writeStream, about, stop);
    about = 'Biography,Location1,followersNumber1,Location2,followersNumber2,Location3,followersNumber3,Location4,followersNumber4\n'
    start += 100000;
    stop += 100000;
    }
 }

 generateLoop()