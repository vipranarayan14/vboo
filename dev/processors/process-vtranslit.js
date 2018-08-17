const { vTranslit } = require('vtranslit');
const { vTranslitSchemeItrn } = require('vtranslit-scheme-itrn');
const { vTranslitSchemeDeva } = require('vtranslit-scheme-deva');

const vtranslit = vTranslit([
  vTranslitSchemeItrn,
  vTranslitSchemeDeva
]);

const vt = vtranslit.init('Itrn', 'Deva');

const processVtranslit = ele => {

  ele.outerHTML = `
  <span class="vtranslit scheme-deva" lang="sa">
     ${vt(ele.textContent)}
  </span>
  `;

};

module.exports = { processVtranslit };
