const { log } = require('./log');
const { processors } = require('./processors/processors');
const { Vhtmx } = require('vhtmx');
const rimraf = require('rimraf');
const cpx = require('cpx');

const src = './src';
const dist = './dist';

const vhtmx = new Vhtmx({
  distRoot: `${dist}/docs`,
  srcExt: '.html',
  srcRoot: `${src}/docs`
});

vhtmx.use(processors);

const build = () => new Promise(resolve => {

  rimraf('./dist/*', rimrafErr => {

    log(rimrafErr, 'error');

    vhtmx.process();

    cpx.copy(`${src}/app/**/*`, `${dist}/`, cpxErr => {

      log(cpxErr, 'error');

      resolve();

    });

  });

});

module.exports = { build };
