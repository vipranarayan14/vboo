const { processAboutWord } = require('./process-about-word');
const { processHeaders } = require('./process-headers');
const { processSadbaTable } = require('./process-sabda-table');
const { processVtranslit } = require('./process-vtranslit');
const { processPrakriya } = require('./process-prakriya');
const { processTransclusion } = require('./process-transclusion');

const processors = [

  {
    process: processHeaders,
    query: 'h1,h2,h3,h4'
  },

  {
    process: processTransclusion,
    query: 'v-include'
  },

  {
    process: processVtranslit,
    query: 'vt'
  },

  {
    process: processSadbaTable,
    query: 'sabda-table'
  },

  {
    process: processAboutWord,
    query: 'about-word'
  },

  {
    process: processPrakriya,
    query: 'pra'
  }
];

module.exports = { processors };
