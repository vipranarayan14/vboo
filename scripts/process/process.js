const { getPaths } = require('./get-paths');
const { log, readFile } = require('../utils');
const { processData } = require('./process-data');
const { writeOutput } = require('./write-output');

const process = config => {

  getPaths(config).then(filePaths => {

    filePaths.forEach(filePath => {

      readFile(filePath)

        .then(processData)

        .then(writeOutput(filePath, config))

        .catch(err => {

          log(err, 'error');

        });

    });

  });

};

module.exports = { process };
