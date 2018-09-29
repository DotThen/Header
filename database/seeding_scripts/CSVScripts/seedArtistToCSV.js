const fs = require ('fs');
const faker = require ('faker');

let writeStuff = (writeStream, artist, index) =>
  new Promise ((resolve, reject) => {
    writeStream.write (artist, 'utf-8', () => {
      console.log (`generated ${index}`);
      writeStream.end (resolve);
    });
  });

let artist;
const generateLoop = async () => {
  let start = 1;
  let stop = 200000;
  artist = 'artistID,artistName,followed,verified\n';
  for (let i = 1; i < 51; i++) {
    const generateArtistData = function () {
      for (let j = start; j < stop + 1; j++) {
        artist +=
          `${j},${faker.name.findName ()},${Math.round (Math.random ()) ? true : false}, ${Math.round(Math.random() * 0.7 + 0.3) ? true : false}` + '\n'
      }
    };
    generateArtistData ();
    let writeStream = fs.createWriteStream ('./artistData2.csv', {"flags": "a"});
    await writeStuff (writeStream, artist, stop);
    start += 200000;
    stop += 200000;
  }
};
generateLoop ();
