const { log } = require('./utils');
const { process } = require('./process/');
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

const clean = dir =>

  new Promise((resolve, reject) =>

    rimraf(dir, err => err ? reject(err) : resolve())

  );

const copy = () =>

  new Promise((resolve, reject) =>

    cpx.copy(
      `${src}/app/**/*`,
      `${dist}/`,
      err => err ? reject(err) : resolve()
    )

  );

const build = () => new Promise((resolve, reject) => {

  clean(`${dist}/*`)
    .then(process(config))
    .then(copy)
    .then(resolve)
    .catch(err => {

      log(err, 'error');

      reject(err);

    });

});

module.exports = { build };
