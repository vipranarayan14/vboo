const log = (msg, type) => (msg) ? (type === 'error') ? console.error(msg) : console.log(msg) : null;

module.exports = { log };
