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
                    css: '[name].[contenthash:4].css',
                    js: '[name].[contenthash:4].js',
                    assets: '[name].[contenthash:4].[ext]',
                },
                extendConfig: (config) => {
                    const rules = config.module.rules;
                    const cssRule = rules.find((r) => String(r.test) === '/\\.css$/');

                    config.optimization.runtimeChunk = {
                        name: `runtime`,
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
