// const fs = require('fs');
// const path = require('path');

// const cwd = process.cwd();
// const isTS = fs.existsSync(path.join(cwd, 'tsconfig.json'));
// @snowpack/plugin-webpack

module.exports = {
    mount: {
        src: '/',
    },
    plugins: ['@snowpack/plugin-react-refresh', '@snowpack/plugin-dotenv'],
    devOptions: {},
    installOptions: {
        installTypes: true,
    },
};
