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
                    config.output.path = `${config.output.path}/dist`;
                    const rules = config.module.rules;
                    const cssRule = rules.find((r) => String(r.test) === '/\\.css$/');

                    config.optimization.runtimeChunk = {
                        name: 'runtime',
                    };

                    return config;
                },
            },
        ],
    ],
    devOptions: {
        open: 'none',
    },
    installOptions: {
        installTypes: true,
    },
};
