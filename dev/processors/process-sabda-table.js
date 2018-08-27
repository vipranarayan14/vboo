const processSadbaTable = ele => {

  let html =
    `
  <div class="table-container">
    <table>
    <thead>
      <tr>
        <th align="right">विभक्तयः</th>
        <th align="center">एकवचनम्</th>
        <th align="center">द्विवचनम्</th>
        <th align="center">बहुवचनम्</th>
      </tr>
    </thead>
    <tbody>
  `;

  const vibhaktis = ['प्रथमा', 'सं-प्रथमा', 'द्वितीया', 'तृतीया', 'चतुर्थी', 'पञ्चमी', 'षष्ठी', 'सप्तमी'];

  const vibhaktiElements = [
    ele.querySelector('prathama'),
    ele.querySelector('sam-prathama'),
    ele.querySelector('dvitiya'),
    ele.querySelector('tritiya'),
    ele.querySelector('caturthi'),
    ele.querySelector('pancami'),
    ele.querySelector('shashti'),
    ele.querySelector('saptami')
  ];

  vibhaktiElements.forEach((vibhaktiEle, index) => {

    if (vibhaktiEle) {

      const eka = vibhaktiEle.querySelector('eka');
      const dvi = vibhaktiEle.querySelector('dvi');
      const bahu = vibhaktiEle.querySelector('bahu');

      html +=
        `
      <tr>
        <td align="right"><strong>${vibhaktis[index]}</strong></td>
        <td align="center">${eka.innerHTML}</td>
        <td align="center">${dvi.innerHTML}</td>
        <td align="center">${bahu.innerHTML}</td>
      </tr>
      `;

    }

  });

  html += `
      </tbody>
    </table>
  </div>`;

  ele.outerHTML = html;

};

module.exports = { processSadbaTable };
