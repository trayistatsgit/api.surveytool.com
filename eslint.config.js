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
      'no-useless-catch': 'error',
      semi: ['error', 'always'],
      quotes: ['error', 'single'],
      'no-unused-vars': ['error', { vars: 'all', args: 'none' }],
      'prettier/prettier': ['error', { endOfLine: 'auto' }],
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

