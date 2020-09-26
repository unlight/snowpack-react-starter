// const fs = require('fs');
// const path = require('path');

// const cwd = process.cwd();
// const isTS = fs.existsSync(path.join(cwd, 'tsconfig.json'));
// @snowpack/plugin-webpack

module.exports = {
    mount: {
        src: '/',
    },
    plugins: [
        '@snowpack/plugin-react-refresh',
        '@snowpack/plugin-dotenv',
        '@snowpack/plugin-postcss',
        [
            '@snowpack/plugin-webpack',
            {
                outputPattern: {
                    css: '[name].[hash:4].css',
                    js: '[name].[hash:4].js',
                    assets: '[name].[hash:4].[ext]',
                },
                extendConfig: (config) => {
                    return config;
                },
            },
        ],
    ],
    devOptions: {},
    installOptions: {
        installTypes: true,
    },
};
