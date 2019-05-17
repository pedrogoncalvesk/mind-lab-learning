const path = require('path');
const rootPath = path.normalize(__dirname + '/..');

module.exports = {
    root: rootPath,
    modelsDir: rootPath + '/models',
    viewsDir: rootPath + '/views',
    assetsDir: rootPath + '/public',
};


