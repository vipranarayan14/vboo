const getOutputPath = (inputFilePath, config) => {

  const outputFilePath = inputFilePath
    .replace(config.srcDir, config.distDir)
    .replace(config.srcExt, config.distExt);

  const outputDirPath = outputFilePath.match(/(.+)\/(?:.(?!\/))+/)[1];

  return {
    outputDirPath,
    outputFilePath
  };

};

module.exports = { getOutputPath };
