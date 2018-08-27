const { log } = require('./log');
const { watch } = require('chokidar');
const bs = require('browser-sync');
const { build } = require('./build');

const initServer = () => {

  bs.create('vbook-server');
  bs.init({
    server: './build'
  });

};

const initWatch = () => {

  log('===Watching Files===');

  watch(['./src/docs'])
    .on('all', (event, path) => {

      log(`${event}: ${path}`);

      build().then(bs.reload);

    });

};

const watchFiles = () => {

  const { NODE_ENV } = process.env;

  if (NODE_ENV === 'production') {

    build();

    return log(
      `Not watching files as node environment is set to: '${NODE_ENV}'`
    );

  }

  build().then(initServer);

  return initWatch();

};

watchFiles();
