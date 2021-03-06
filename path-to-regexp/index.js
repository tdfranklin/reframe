const RepageRouterPathToRegexp = require('@repage/router-path-to-regexp');

module.exports = pathToRegexp;

function pathToRegexp() {
    return {
        name: require('./package.json').name,
        reframeBrowserConfig: {
            diskPath: require.resolve('./browser.js'),
        },
        repagePlugins: [
            RepageRouterPathToRegexp,
        ],
    };
}
