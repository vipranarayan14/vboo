const { processVtranslit } = require('./process-vtranslit');

const preprocesses = [

  {
    regex: /\/\/(.*?)\/\//g,
    replacement: processVtranslit
  },

  {
    regex: /;;;(.*?)\s*\n(.*?)\n;;;/g,
    replacement: '<div class="$1-block">$2</div>'
  }

];

module.exports = { preprocesses };
