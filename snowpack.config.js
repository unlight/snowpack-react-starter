module.exports = {
    mount: {
        src: '/',
    },
    plugins: [
        '@snowpack/plugin-react-refresh',
        '@snowpack/plugin-postcss',
        [
            '@snowpack/plugin-webpack',
            {
                htmlMinifierOptions: false,
                outputPattern: {
                    css: '[name].[contenthash:6].css',
                    js: '[name].[contenthash:6].js',
                    assets: '[name].[contenthash:6].[ext]',
                },
                extendConfig: (config) => {
                    const path = require('path');
                    const isProduction = process.env.NODE_ENV === 'production';

                    config.output.path = `${config.output.path}/dist`;
                    config.output.publicPath = '';
                    const rules = config.module.rules;
                    const cssRule = rules.find((r) => String(r.test) === '/\\.css$/');

                    config.optimization.runtimeChunk = {
                        name: 'runtime',
                    };

                    // Webpack is runnning over prepared by snowpack build

                    if (isProduction) {
                        config.resolve.alias[
                            path.resolve('build/environments/environment.js')
                        ] = path.resolve('build/environments/environment.prod.js');
                    }

                    return config;
                },
            },
        ],
    ],
    devOptions: {
        open: 'none',
    },
    installOptions: {
        polyfillNode: true,
        installTypes: true,
    },
};
