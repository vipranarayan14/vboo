const processPrakriya = ele => {

  ele.outerHTML = `<div class="prakriya-block">${ele.innerHTML}</div>`;

};

module.exports = { processPrakriya };
