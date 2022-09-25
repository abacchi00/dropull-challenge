import type { Config } from 'jest';

export default async (): Promise<Config> => {
  return {
    verbose: true,
    transform: {
      '^.+\\.tsx?$': 'ts-jest',
      ".+\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "jest-transform-stub",
    },
    moduleNameMapper: {
      "@/(.*)": "<rootDir>/src/$1",
    },
    collectCoverage: true,
    collectCoverageFrom: [
      // 'src/components/**/*.component.tsx', // TODO fix
      'src/hooks/**/*.hook.ts',
      // 'src/pages/**/*.tsx', // TODO fix
      'src/services/**/*.service.ts',
    ],
  };
};
