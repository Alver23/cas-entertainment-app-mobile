module.exports = {
  env: {
    es6: true,
    node: true,
    jest: true
  },
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'airbnb-base',
    'plugin:prettier/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:react/recommended'
  ],
  rules: {
    'import/no-unresolved': 'off',
    'max-len': ['error', { 'code': 140 }],
    'prettier/prettier': 1,
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': [ 'error', { 'devDependencies': true } ],
    '@typescript-eslint/interface-name-prefix': [ 'error', { 'prefixWithI': 'always' }],
  },
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    }
  }
};
