const { readFileSync } = require('fs');

const processTransclusion = ele => {

  ele.outerHTML = readFileSync(
    `./src/docs/${ele.getAttribute('src')}.html`,
    'utf8'
  );

};

module.exports = { processTransclusion };
