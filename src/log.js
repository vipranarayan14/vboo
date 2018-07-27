const log = (msg, type) => (msg) ? (type === 'error') ? console.error(msg) : console.log(msg) : null; //eslint-disable-line no-console

module.exports = { log };
