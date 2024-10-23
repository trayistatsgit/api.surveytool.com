// eslint.config.js
const { defineConfig } = require('eslint-define-config');
const typescriptEslintPlugin = require('@typescript-eslint/eslint-plugin');
const prettierPlugin = require('eslint-plugin-prettier');
const importPlugin = require('eslint-plugin-import');

module.exports = defineConfig([
  {
    languageOptions: {
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      globals: {
        process: 'readonly',
        require: 'readonly',
      },
    },
    rules: {
      'import/no-unresolved': 'off',
      'no-useless-catch': 2,
      semi: ['error', 'always'],
      quotes: ['error', 'single'],
      'no-empty': 0,
      'no-irregular-whitespace': 0,
      'no-unused-vars': ['error', { vars: 'all', args: 'none' }],
      'no-underscore-dangle': 0,
      'linebreak-style': 0,
      'import/prefer-default-export': 'off',
      'class-methods-use-this': ['off', { exceptMethods: ['create'] }],
      'global-require': 0,
      'default-param-last': 0,
      'react/no-array-index-key': 'off',
      'import/no-extraneous-dependencies': 'off',
      'no-plusplus': [2, { allowForLoopAfterthoughts: true }],
      'no-param-reassign': [2, { props: false }],
      'prettier/prettier': ['error', { endOfLine: 'auto' }],
      '@typescript-eslint/no-explicit-any': 'off',
      'import/extensions': 'off',
      'import/order': [
        'error',
        {
          'newlines-between': 'never',
          alphabetize: {
            caseInsensitive: true,
          },
        },
      ],
      // Specify whether to require a newline per chained method call
      'newline-per-chained-call': 'off', // You can set it to 'off' if you don't want to enforce this rule
      // New rules added below
      'no-async-promise-executor': 'error',
      'no-await-in-loop': 'warn',
      'no-compare-neg-zero': 'error',
      'no-cond-assign': 'error',
      'no-dupe-args': 'error',
      // Add more rules as needed...
    },
    plugins: {
      '@typescript-eslint': typescriptEslintPlugin,
      prettier: prettierPlugin,
      import: importPlugin,
    },
  },
  {
    ignores: [
      'node_modules/',
      'dist/',
      '**/*.spec.js',
    ],
  },
]);

