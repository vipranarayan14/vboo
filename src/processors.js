let headerIdNo = 0;

const processHeader = ele => {

  const refinedText = ele.textContent.toLowerCase().replace(/\s/g, '-');

  ele.setAttribute('id', `ha${headerIdNo}-${refinedText}`);

  headerIdNo += 1;

}

const processors = [

  {
    process: processHeader,
    query: 'h1,h2,h3,h4'
  }

];

module.exports = { processors };
