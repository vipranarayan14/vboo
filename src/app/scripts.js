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

const initEventListeners = () => {

  document.querySelectorAll('a').forEach(anchorElement =>

    anchorElement.addEventListener('click', loadLinks)

  );

};

const setHash = hash => window.location.hash = hash;

const setPageContent = content => {

  mainElement.innerHTML = content;

  initEventListeners();

};

const getRelativeUrl = reference => {

  const validRelativeUrl = reference.match(/^\.(\/.+)\.html$/);

  return (validRelativeUrl) ? validRelativeUrl[1] : null;

};

const loadLinks = event => {

  const reference = event.target.getAttribute('href');
  const relativeUrl = getRelativeUrl(reference);

  if (relativeUrl) {

    event.preventDefault();

    setHash(relativeUrl);

  }

};

const handleHash = () => {

  const hash = window.location.hash;
  const contentUrl = `./docs/${hash.split('#/')[1]}.html`;

  ajax(contentUrl, responseText => {

    setPageContent(responseText);

  });

};

const documentInit = () => {

  const homeContentPath = mainElement.getAttribute('data-content');

  if (window.location.hash) {

    return handleHash();

  }

  return setHash(getRelativeUrl(homeContentPath));

};

window.addEventListener('hashchange', event => {

  event.preventDefault();
  handleHash();

});

window.addEventListener('DOMContentLoaded', documentInit);
