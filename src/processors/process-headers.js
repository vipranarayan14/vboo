const generateHash = () =>

  //eslint-disable-next-line no-magic-numbers
  Math.random().toString(36).substring(2, 5) + Date.now().toString(36).substr(5, 3);

const processHeaders = ele => {

  const refinedText = ele.textContent.toLowerCase().replace(/\s/g, '-');

  const content = ele.innerHTML;

  const id = `ha${generateHash()}-${refinedText}`;

  ele.setAttribute('id', id);

  ele.innerHTML = `<a href="#${id}">${content}</a>`;

};

module.exports = { processHeaders };
