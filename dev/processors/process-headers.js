/* eslint-disable no-magic-numbers */
const generateHash = () =>

  Math.random().toString(36).substring(2, 5) +

  Date.now().toString(36).substr(5, 3);

/* eslint-enable no-magic-numbers */

const processHeaders = ele => {

  const refinedText = ele.textContent
    .trim() //Remove space around
    .toLowerCase()
    .replace(/[^\x00-\x7F]/g, '') //Remove non-ASCII chars
    .replace(/\s/g, '-'); //Replace space with '-' (hyphens)

  const content = ele.innerHTML;

  const id = `ha${generateHash()}-${refinedText}`;

  ele.setAttribute('id', id);

  ele.innerHTML = `<a href="#${id}">${content}</a>`;

};

module.exports = { processHeaders };
