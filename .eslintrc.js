/**
 *
 * These aliases need to remain in sync across the 3 files below.
 *
 *    - .eslintrc.js
 *    - tsconfig.json
 */
const aliases = ['@/src/', '@/images/'];

const regExAliases = `^(${aliases.join('|')})`;
const regExCSS = '^.+\\.css$';
const regExNPM = '^@?\\w';
const regExReact = '^react';
const regExRelative = '^\\.';
// const regExSideEffects = '^\\u0000';

module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },

  extends: [
    'next/core-web-vitals',
    'eslint:recommended',
    'plugin:sort/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'prettier',
  ],

  globals: {
    // Test related
    afterAll: false,
    afterEach: false,
    beforeAll: false,
    beforeEach: false,
    describe: false,
    expect: false,
    it: false,
    test: false,
  },

  overrides: [
    {
      files: ['*.js', '*.jsx', '*.ts', '*.tsx'],
    },
  ],

  parser: '@typescript-eslint/parser',

  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 2020,
    sourceType: 'module',
  },

  plugins: [
    '@getify/proper-arrows',
    '@typescript-eslint',
    'prettier',
    'react',
    'react-hooks',
    'sort',
  ],

  root: true,

  rules: {
    '@getify/proper-arrows/where': [
      'warn',
      { global: false, 'global-declaration': true, property: false },
    ],
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
    eqeqeq: 'error',
    'max-depth': ['error', 4],
    'max-lines': ['error', 250],
    'no-unused-vars': 'off',
    'react/no-unescaped-entities': 'off',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'sort/imports': [
      'warn',
      {
        groups: [
          // { order: 1, type: 'side-effect' },
          { order: 4, regex: regExAliases },
          { order: 2, regex: regExReact },
          { order: 3, regex: regExNPM },
          { order: 5, regex: regExRelative },
          { order: 100, type: 'other' },
          { order: 101, regex: regExCSS },
        ],
      },
    ],
    'sort/type-properties': 'warn',
  },

  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
  },
};
