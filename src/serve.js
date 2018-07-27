const bs = require('browser-sync').create('Docs Server');

bs.init({
  files: ['./src/(docs|app)/**/*'],
  server: './dist'
});
