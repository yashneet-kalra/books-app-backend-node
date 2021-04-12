const coreMiddlewares = require('./core/core');
const httpProxy = require('./reverse-proxy/reverse-proxy').httpProxy;

module.exports = {
    ...coreMiddlewares,
    httpProxy
}