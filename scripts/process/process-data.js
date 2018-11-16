const { preprocess } = require('./preprocess');
const { convertToHtml } = require('./convert-to-html');

const processData = data =>

  new Promise((resolve, reject) => preprocess(data)
    .then(convertToHtml)
    .then(resolve)
    .catch(err => reject(err))

  );

module.exports = { processData };
