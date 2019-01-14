const preprocesses = [

  {
    regex: /;;;(.*?)\n((.|\n)*?)\n;;;/g,
    replacement: '<div class="$1-block">$2</div>'
  }

];

const preprocess = data =>

  new Promise(resolve => {

    let processedData = data;

    preprocesses.forEach(process => {

      processedData = processedData.replace(process.regex, process.replacement);

    });

    resolve(processedData);

  });

module.exports = { preprocess };
