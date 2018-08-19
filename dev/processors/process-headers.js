const processHeaders = ele => {

  const refinedText = ele.textContent
    .replace(/[^\x00-\x7F]/g, '') //Remove non-ASCII chars
    .trim() //Remove space around
    .toLowerCase()
    .replace(/\s+/g, '-'); //Replace space with '-' (hyphens)

  const content = ele.innerHTML;

  const id = `ha-${refinedText}`;

  ele.setAttribute('id', id);

  ele.innerHTML =
    `${content}<a class="ha-anchor" style="float:right" href="#${id}">#</a>`;

};

module.exports = { processHeaders };
