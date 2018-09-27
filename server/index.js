const path = require('path');
const express = require('express');
const cors = require('cors');
require('console-stamp')(console, 'HH:MM:ss.l');
const bodyParser = require('body-parser');
const HeaderDB = require('../database/index.js');
const app = express();
app.use(bodyParser.json());
app.use(require('morgan')('short'));
app.use(cors());
// *************webpack-hot-middleware set-up*******************
// // Step 1: Create & configure a webpack compiler

// const webpack = require('webpack');
// const webpackConfig = require('../webpack.config');
// const compiler = webpack(webpackConfig);

// // Step 2: Attach the dev middleware to the compiler & the app
// app.use(
//   require('webpack-dev-middleware')(compiler, {
//     logLevel: 'warn',
//     publicPath: webpackConfig.output.publicPath
//   })
// );

// // Step 3: Attach the hot middleware to the compiler & the app
// app.use(
//   require('webpack-hot-middleware')(compiler, {
//     log: console.log,
//     path: '/__webpack_hmr',
//     heartbeat: 10 * 1000
//   })
// );
// SOURCE: https://github.com/webpack-contrib/webpack-hot-middleware/tree/master/example
// ************************************

// app.use(express.static(__dirname + '/../public/dist'));

// Upon GET request to '/artist/:artistID', queries the HeaderDB (mongoDB) and sends back artistObj.
app.get('/artists/:artistID', (req, res) => {
  console.log('##########RECEIVING GET##########');
  if (!!parseInt(req.params.artistID)) {
    HeaderDB.find({ artistID: parseInt(req.params.artistID) }, (err, artistObj) => {
      res.statusCode = 200;
      res.send(artistObj);
    });
  } else {
    // conditional error handling if artistID parameter is string
    res.status(400).send({ ERROR: 'artistID parameter accepts numbers between 1 and 100' });
  }
});

app.post('/artists/newArtist', (req, res, next) => {
  let newArtist = new HeaderDB({
    artistID: req.body.id,
    followed: req.body.followed,
    artistName: req.body.name,
    followersNumber: req.body.followersNumber,
    about: {
      biography: req.body.biography,
      Where: req.body.location
    }
  })
  newArtist.save(function (err, newArtist) {
    if (err) {
      res.status(400).send({ ERROR: 'does not accept post request' });
      return next(err)
    }
    res.json(201, newArtist);
  })
});

app.put('/artists/:artistID/update', function (req, res) {
  HeaderDB.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, HeaderDB) => {
    if(err) {
      res.status(500);
    }
    res.send(HeaderDB)
  })
})

app.delete('/artists/:artistID/delete', function (req, res) {
  HeaderDB.findByIdAndRemove({_id: req.body.id}, (err) =>{
    if (err) {
      res.status(500).send(err);
    }
    res.status(200)
  })  
})

app.listen(process.env.PORT || 3004, function onStart(err) {
  if (err) {
    console.log(err);
  }
  console.info(`==> 🌎 Listening on port %s. Open up http://127.0.0.1:${process.env.PORT || 3004}/ in your browser.`);
});

module.exports = app;