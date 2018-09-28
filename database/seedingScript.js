const fs = require('fs');
const faker = require('faker');


let allArtists;

let writeStuff = (writeStream, json, index) => new Promise((resolve, reject) =>{
  writeStream.write(json, 'utf-8', () =>{
    console.log(`generated ${index}`);
    writeStream.end(resolve);
  })

})

const generateLoop = async () => {
  let start = 1;
  let stop = 100000;

  for (let i = 1; i < 100; i++) {
    let allArtists = [];

     const generateData = function(n) {
       for (let i = start; i < stop + 1 ; i++) {
         let artist = {
           artistID: i,
           artistName: faker.name.findName(),
           followed: Math.round(Math.random()) ? true : false,
           followersNumber: faker.random.number({ min: 1000, max: 100000 }),
           aboutParagraph: faker.lorem.paragraphs(faker.random.number({ min: 5, max: 10 }), '\n\n') 
         }
         allArtists.push(artist);   
       }
    }
    generateData(10000)
  let writeStream = fs.createWriteStream('./artistData.json');
  let json = JSON.stringify(allArtists)
  await writeStuff(writeStream, json, stop);
  start += 100000;
  stop += 100000;
}
}
generateLoop();

// writeStream = fs.createWriteStream('./artistData.csv');
// writeStream.write(stringData, () =>{
  
// });

// writeStream.end('utf8', () => {
//  console.log('stream has ended');
// });
// writeStream.on('finish', () => {  
//  console.log(`wrote ${i} data to file`);
// });
   //generateData(100000)
   //console.log(`writing ${i} data to file`);

  




// allArtists = [];

// for (let i = start; i < stop; i++) {
//   let artist = {
//     artistID: i,
//     artistName: faker.name.findName(),
//     followed: Math.round(Math.random()) ? true : false,
//     followersNumber: faker.random.number({ min: 1000, max: 100000 }),
//     aboutParagraph: faker.lorem.paragraphs(faker.random.number({ min: 5, max: 10 }), '\n\n') 
//   }
//   allArtists.push(artist);   
// }

// console.log("Artists Created");

// fs.writeFile("./HellYeahItWorks.json", JSON.stringify(allArtists), 'utf8', (err) => {
//   if (err) throw err;
//   console.log("Hell yeah")
// })


