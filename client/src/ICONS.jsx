// import React, { Component } from 'react';

const fs = require('fs');

fs.readdir(
  __dirname + '/icons',
  (err, files) =>
    err
      ? console.error(err)
      : files.map(file => {
          if (file !== '.DS_Store') {
            fs.readFile(__dirname + '/icons/' + file, (err, data) => {
              err ? console.error(err) : console.log(data.toString());
            });
          }
        })
);
