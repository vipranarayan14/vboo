const bs = require('browser-sync').create('Docs Server');

bs.init({
  server: './dist',
  files: ['./dist/*']
});
