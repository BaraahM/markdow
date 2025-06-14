const path = require('path');

module.exports = {
  extends: ['next/core-web-vitals'],
  parserOptions: {
    babelOptions: {
      presets: [
        require.resolve('next/babel', {
          paths: [path.resolve(__dirname, '../../')],
        }),
      ],
    },
  },
};