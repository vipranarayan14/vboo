const { preprocesses } = require('./preprocesses');
const { convertToHtml } = require('./convert-to-html');

const processData = data => {

  let processedData = data;

  preprocesses.forEach(process => {

    processedData = processedData.replace(process.regex, process.replacement);

    processedData = convertToHtml(processedData);

  });

  return processedData;

};

module.exports = { processData };
