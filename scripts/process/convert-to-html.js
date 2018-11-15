const remark = require('remark');
const styleGuide = require('remark-preset-lint-markdown-style-guide');
const html = require('remark-html');
const report = require('vfile-reporter');

const { log } = require('../utils');

const convertToHtml = data => {

  let htmlOutput = '';

  remark()
    .use(styleGuide)
    .use(html)
    .process(data, (err, file) => {

      log(report(err || file), 'error');

      htmlOutput = String(file);

    });

  return htmlOutput;

};

module.exports = { convertToHtml };
