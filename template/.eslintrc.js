module.exports = {
  extends: [
    'eslint:recommended',
    'airbnb',
    'airbnb/hooks',
    'plugin:prettier/recommended',
    'prettier/react',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  env: {
    node: true,
    browser: true,
    jest: true,
  },
  plugins: ['eslint-plugin-import-helpers'],
  rules: {
    'import-helpers/order-imports': [
      'error',
      {
        groups: [
          '/^react/',
          'module',
          ['parent', 'sibling', 'index'],
          '/.*(css|scss)$/',
        ],
        newlinesBetween: 'always',
      },
    ],
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1,
      },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
