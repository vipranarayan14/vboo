const { log } = require('./utils');
const { process } = require('./process/process');
const rimraf = require('rimraf');
const cpx = require('cpx');

const src = './src';
const dist = './build';

const config = {
  distDir: `${dist}/docs`,
  distExt: '.html',
  srcDir: `${src}/docs`,
  srcExt: '.md'
};

const build = () => new Promise(resolve => {

  rimraf(`${dist}/*`, rimrafErr => {

    log(rimrafErr, 'error');

    process(config);

    cpx.copy(`${src}/app/**/*`, `${dist}/`, cpxErr => {

      log(cpxErr, 'error');

      resolve();

    });

  });

});

module.exports = { build };
