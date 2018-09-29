const fs = require ('fs');
const faker = require ('faker');
faker.locale = 'en_US';

let writeStuff = (writeStream, json, index) =>
  new Promise ((resolve, reject) => {
    writeStream.write (json, 'utf-8', () => {
      console.log (`generated ${index}`);
      writeStream.end (resolve);
    });
  });


let artistBio;
const generateLoop = async () => {
   let start = 1;
   let stop = 50000;

  for (let i = 1; i < 201; i++){
    artistBio = [];
    const generateData = () => {
      for (let i = start; i < stop + 1; i++) {
        about = {
          followersNumber: 'PLACE_HOLDER',
          Biography : faker.lorem.paragraphs(2, '\n\n'),
          Where : {}
        }
        const generateBio = () => {
          for (let i = 0; i < 3 ; i++) {
            about.Where[faker.address.city()] = faker.random.number({ min: 1000, max: 100000 });
          }
          about.followersNumber = Object.values(about.Where).reduce((accumulator, currentValue) => accumulator + currentValue);      
        }  
        generateBio();
        artistBio.push(about);
      }
    }
    generateData()
    let writeStream = fs.createWriteStream ('./artistBio.json', {"flags": "a"});
    let json = JSON.stringify (artistBio);
    await writeStuff (writeStream, json, stop);
    start += 50000;
    stop += 50000;
    }
 }

 generateLoop()
// 