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
    'airbnb-base',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:react/recommended'
  ],
  rules: {
    'import/no-unresolved': 'off',
  },
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    }
  }
};
