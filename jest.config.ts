import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  preset: 'react-native',
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/assetsTransformer.js',
    '\\.(css|less)$': '<rootDir>/assetsTransformer.js',
  },
  setupFilesAfterEnv: ['./node_modules/react-native-gesture-handler/jestSetup.js', './setup-jest-tests.ts'],
  transformIgnorePatterns: ['node_modules/(?!(@react-native|react-native|react-native-vector-icons|native-base)/)'],
  testPathIgnorePatterns: ['./ios'],
};

export default config;
