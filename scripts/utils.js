const fs = require('fs');

const mkdirp = require('mkdirp');

const log = (msg, type) =>

  (msg) ? (type === 'error') ? console.error(msg) : console.log(msg) : null; //eslint-disable-line no-console

const makeDirs = outputDirPath =>

  new Promise((resolve, reject) =>

    mkdirp(outputDirPath, mkdirpErr => {

      if (mkdirpErr) {

        reject(mkdirpErr);

      }

      resolve();

    })

  );

const readFile = filePath =>

  new Promise((resolve, reject) =>

    fs.readFile(filePath, 'utf8', (err, data) => {

      if (err) {

        return reject(err);

      }

      return resolve(data);

    })

  );

const writeFile = (filePath, data) => () =>

  new Promise((resolve, reject) =>

    fs.writeFile(filePath, data, 'utf8', err => {

      if (err) {

        reject(err);

      }

      resolve();

    })

  );

module.exports = {
  log,
  makeDirs,
  readFile,
  writeFile
};
