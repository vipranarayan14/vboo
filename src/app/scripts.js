const mainElement = document.querySelector('main');

const log = console.log; //eslint-disable-line no-console

const ajax = (url, cb) => {

  const xhttp = new XMLHttpRequest();

  xhttp.addEventListener('error', () => {

    log(`An error occurred while loading the file: '${url}'`);

  });

  xhttp.addEventListener('abort', () => {

    log(`The loading of '${url}' has been aborted.`);

  });

  xhttp.addEventListener('load', () => {

    cb(xhttp.responseText);

  });

  xhttp.open('GET', url, true);
  xhttp.send();

};

const setHash = hash => window.location.hash = hash;

const setView = sectionId =>

  sectionId ? document.getElementById(sectionId).scrollIntoView() : '';

const setAnchors = contentPath => {

  document.querySelectorAll('a.ha-anchor')

    .forEach(anchorElement =>

      anchorElement.setAttribute(
        'href',
        `${window.location.origin}/${contentPath}/${anchorElement.getAttribute('href')}`
      )

    );

};

const setPageContent = (content, contentPath, sectionId) => {

  mainElement.innerHTML = content;

  setAnchors(contentPath);

  setView(sectionId);

};

const handleHash = () => {

  const hash = window.location.hash;
  const [_path, sectionId] = hash.split('/#');
  const path = _path.split('#/')[1];

  if (path) {

    const contentUrl = `./docs/${path}.html`;

    ajax(contentUrl, responseText => {

      setPageContent(
        responseText,
        _path,
        sectionId
      );

    });

  }

};

const documentInit = () => {

  const homeContentPath = mainElement.getAttribute('data-content');

  if (window.location.hash) {

    return handleHash();

  }

  return setHash(homeContentPath);

};

window.addEventListener('hashchange', event => {

  event.preventDefault();
  handleHash();

});

window.addEventListener('DOMContentLoaded', documentInit);
