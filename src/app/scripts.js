const navEle = document.querySelector('nav');
const pagesContEle = document.getElementById('pages-container');

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

const setView = sectionId => {

  const section = document.getElementById(sectionId);

  if (section) {

    section.scrollIntoView();

  } else {

    window.scrollTo(0, 0);

  }

};

const setAnchors = contentPath => {

  document.querySelectorAll('a.ha-anchor')

    .forEach(anchorElement =>

      anchorElement.setAttribute(
        'href',
        `${contentPath}/${anchorElement.getAttribute('href')}`
      )

    );

};

const setPageContent = (content, contentPath, sectionId) => {

  pagesContEle.innerHTML = content;

  setAnchors(contentPath);

  setView(sectionId);

};

const getBreadcrumbs = path => {

  const breadcrumbs = path.split('/');

  if (
    breadcrumbs[breadcrumbs.length - 1] === '' ||
    breadcrumbs[breadcrumbs.length - 1] === 'main'
  ) {

    // eslint-disable-next-line no-magic-numbers
    return breadcrumbs.slice(0, -2);

  }

  return breadcrumbs.slice(0, -1);

};

const updateBreadcrumbs = path => {

  let html = '',

    href = '#';

  if (path !== 'home') {

    html += '<a href="#/home">Home</a> >';

    getBreadcrumbs(path).forEach(breadcrumb => {

      href += `/${breadcrumb}`;
      html += ` <a href="${href}/">${breadcrumb}</a> >`;

    });

  }

  navEle.innerHTML = html;

};

const getContentUrl = path =>

  path[path.length - 1] === '/' ? (

    `./docs/${path}main.html`

  ) : (

    `./docs/${path}.html`

  );

const handleHash = () => {

  const hash = window.location.hash;
  const [_path, sectionId] = hash.split('/#');
  const path = _path.split('#/')[1];

  if (path) {

    const contentUrl = getContentUrl(path);

    ajax(contentUrl, responseText => {

      setPageContent(
        responseText,
        _path,
        sectionId
      );

      updateBreadcrumbs(path);

    });

  }

};

const documentInit = () => {

  const homeContentPath = pagesContEle.getAttribute('data-homepage');

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
