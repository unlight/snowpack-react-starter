const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
    plugins: [
        require('tailwindcss')(),
        require('postcss-center')(),
        isProduction
            ? require('cssnano')({
                  preset: [
                      'default',
                      {
                          discardComments: {
                              removeAll: true,
                          },
                      },
                  ],
              })
            : undefined,
    ],
};
