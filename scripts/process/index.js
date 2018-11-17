const { getPaths } = require('./get-paths');
const { readFile } = require('../utils');
const { processData } = require('./process-data');
const { writeOutput } = require('./write-output');
const { processTransclusions } = require('./process-transclusions');

const process = config => () =>

  new Promise((resolve, reject) =>

    getPaths(config).then(filePaths =>

      filePaths.forEach(filePath => readFile(filePath)
        .then(processTransclusions)
        .then(processData)
        .then(writeOutput(filePath, config))
        .then(resolve)
        .catch(err => reject(err)))

    )

  );

module.exports = { process };
