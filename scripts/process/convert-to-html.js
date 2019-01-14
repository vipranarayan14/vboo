const vtranslit = require('remark-vtranslit');
const remark = require('remark');
const html = require('remark-html');
const report = require('vfile-reporter');

const { vTranslitSchemeItrn } = require('vtranslit-scheme-itrn');
const { vTranslitSchemeDeva } = require('vtranslit-scheme-deva');

const convertToHtml = data =>

  new Promise((resolve, reject) => {

    remark()
      .use(vtranslit, [
        vTranslitSchemeItrn,
        vTranslitSchemeDeva
      ])
      .use(html)
      .process(data, (err, file) => err ?

        reject(report(err || file, { quiet: true })) :

        resolve(String(file))

      );

  });

module.exports = { convertToHtml };
