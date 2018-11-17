const glob = require('glob');

const getPaths = ({ srcDir, srcExt }) => new Promise((resolve, reject) =>

  glob(`${srcDir}/**/*${srcExt}`, (err, filePaths) => {

    if (err) {

      reject(err);

    }

    resolve(filePaths);

  })

);

module.exports = { getPaths };
