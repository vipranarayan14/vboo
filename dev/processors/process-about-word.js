const processAboutWord = ele => {

  const pratipadikam = ele.querySelector('pp').innerHTML;
  const anta = ele.querySelector('antam').innerHTML;
  const linga = ele.querySelector('linga').innerHTML;

  ele.outerHTML =
    `
  <table>
    <thead>
      <tr>
        <th align="center">प्रातिपदिकम्</th>
        <th align="center">अन्तः</th>
        <th align="center">लिङ्गः</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td align="center">${pratipadikam}</td>
        <td align="center">${anta}</td>
        <td align="center">${linga}</td>
      </tr>
    </tbody>
  </table>
  `;

};

module.exports = { processAboutWord };
