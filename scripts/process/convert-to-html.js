const remark = require('remark');
const html = require('remark-html');
const report = require('vfile-reporter');

const convertToHtml = data =>

  new Promise((resolve, reject) => {

    remark()
      .use(html)
      .process(data, (err, file) => err ?

        reject(report(err || file, { quiet: true })) :

        resolve(String(file))

      );

  });

module.exports = { convertToHtml };
