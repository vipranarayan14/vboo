const remark = require('remark');
const html = require('remark-html');
const report = require('vfile-reporter');

const { log } = require('../utils');

const convertToHtml = data => {

  let htmlOutput = '';

  remark()
    .use(html)
    .process(data, (err, file) => {

      log(report(err || file), 'error');

      htmlOutput = String(file);

    });

  return htmlOutput;

};

module.exports = { convertToHtml };
