const { readFileSync } = require('fs');

const processTransclusions = data =>

  new Promise(resolve => {

    const transclusionRegex = /\n%\[.*?\]\(#\/(.*?)\)\n/g;

    let match,
      transcludedData = data;

    while ((match = transclusionRegex.exec(transcludedData))) {

      const content = readFileSync(`src/docs/${match[1]}.md`, 'utf8');

      transcludedData = transcludedData.replace(match[0], `\n${content}`);

    }

    resolve(transcludedData);

  });

module.exports = { processTransclusions };
