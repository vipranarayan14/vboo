const { log } = require('./log');
const { watch } = require('chokidar');

const watchFiles = cb => {

  const { NODE_ENV } = process.env;

  if (NODE_ENV === 'production') {

    return log(`watchFiles: Not watching files as node enviroment is set to: '${NODE_ENV}'`);

  }

  log('===Watching Files===');

  return watch(['./src/docs', './src/app']).on('all', (event, path) => {

    log(`${event}: ${path}`);

    cb();

  });

};

module.exports = { watchFiles };
