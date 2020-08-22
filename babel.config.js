module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        cwd: 'babelrc',
        extensions: ['.ts', '.tsx', '.js', '.ios.js', '.android.js'],
        alias: {
          '@assets': './src/assets',
          '@commons': './src/commons',
          '@components': './src/components',
          '@containers': './src/containers',
          '@core': './src/core',
          '@hooks': './src/hooks',
          '@screen': './src/screen',
          '@services': './src/services',
        },
      },
    ],
    'jest-hoist',
  ],
};
