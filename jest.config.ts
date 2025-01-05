import type { Config } from 'jest';

const config: Config = {
  roots: ['<rootDir>/tests'],
  transform: {
    ".(ts|tsx)": "ts-jest"
  },
  globals: {
    fetch: global.fetch,
  },
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};

export default config;
