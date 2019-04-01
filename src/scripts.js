const navEle = document.querySelector('.vboo nav');
const pagesContEle = document.getElementById('pages-container');
const sidebarEle = document.querySelector('.vboo aside');
const searchInput = sidebarEle.querySelector('.search-input');
const searchResultsContainer = sidebarEle.querySelector(
  '.search-results-container'
);
const tocContainer = sidebarEle.querySelector('.toc-container');
const sidebarToggles = document.querySelectorAll(
  '.vboo header .sidebar-toggle'
);

const log = console.log; //eslint-disable-line no-console

let index;

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

const setHash = hash => (window.location.hash = hash);

const setView = sectionId => {

  const section = document.getElementById(sectionId);

  if (section) {

    section.scrollIntoView();

  } else {

    window.scrollTo(0, 0);

  }

};

const setAnchors = contentPath => {

  document
    .querySelectorAll('a.ha-anchor')

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

  let html = 'Home',
    href = '#';

  if (path !== 'home') {

    html = '<a href="#/home">Home</a> >';

    getBreadcrumbs(path).forEach(breadcrumb => {

      href += `/${breadcrumb}`;
      html += ` <a href="${href}/">${breadcrumb}</a> >`;

    });

  }

  navEle.innerHTML = html;

};

const getContentUrl = path =>
  path[path.length - 1] === '/'
    ? `./docs/${path}main.html`
    : `./docs/${path}.html`;

const handleHash = () => {

  const hash = window.location.hash;
  const [_path, sectionId] = hash.split('/#');
  const path = _path.split('#/')[1];

  if (path) {

    const contentUrl = getContentUrl(path);

    ajax(contentUrl, responseText => {

      setPageContent(responseText, _path, sectionId);

      updateBreadcrumbs(path);

    });

  }

};

const documentInit = () => {

  const homeContentPath = pagesContEle.getAttribute('data-homepage');

  index = window.FlexSearch.create();

  index.import(window.$FLEX_SEARCH_INDEX);

  ajax(
    '/docs/toc.html',
    responseText => (tocContainer.innerHTML = responseText)
  );

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

sidebarToggles.forEach(ele =>
  ele.addEventListener('click', () => {

    sidebarEle.classList.toggle('open');

  })
);

searchInput.addEventListener('keyup', e => {

  const searchQuery = e.target.value;

  const searchResults = index.search(searchQuery);

  const searchResultsDetails =
    searchResults.map(result => window.$FILE_LIST[result]) || [];

  const searchResultsDetailsHTML = searchResultsDetails.map(
    resultDetails =>
      `<div class="search-result">
      <a href="${resultDetails.filepath.replace(
    /.*?docs(.*?)(main)?.md$/,
    '#$1'
  )}" onclick="javascript:sidebarEle.classList.remove('open');">${
  resultDetails.docTitle
}</a></div>`
  );

  searchResultsContainer.innerHTML = searchResultsDetailsHTML.join(' ');

});
