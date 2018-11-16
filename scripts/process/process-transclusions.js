// const { log, readFile } = require('../utils');
// const { transcludeString } = require('hercule');

const markdownInclude = require('markdown-include');

const processTransclusions = data => new Promise(resolve =>

  resolve(markdownInclude.replaceIncludeTags(data))

);

// const processTransclusions = data =>
//
//   new Promise((resolve, reject) => {
//
//     const transclusionRegex = /{{#\/(.*?)}}/g;
//
//     const match = [];
//     let transcludedData = data;
//
//     log(match);
//
//     while (match !== null) {
//
//       readFile(`src/docs/${match[1]}.md`)
//         .then(content => {
//
//           transcludedData = transcludedData.replace(match[0], content);
//           log(content);
//
//         })
//         .catch(err => reject(err));
//
//       match = transclusionRegex.exec(data);
//
//       log(match);
//
//       if (match === null) {
//
//         resolve(transcludedData);
//
//       }
//
//     }
//
//   });

module.exports = { processTransclusions };
