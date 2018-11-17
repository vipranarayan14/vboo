const { makeDirs, writeFile } = require('../utils');
const { getOutputPath } = require('./get-output-path');

const writeOutput = (path, config) => data =>

  new Promise((resolve, reject) => {

    const {
      outputDirPath,
      outputFilePath
    } = getOutputPath(path, config);

    makeDirs(outputDirPath)

      .then(writeFile(outputFilePath, data))

      .catch(err => reject(err));

    resolve();

  });

module.exports = { writeOutput };
