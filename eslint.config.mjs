import js from '@eslint/js';
import globals from 'globals';
import css from '@eslint/css';
import { defineConfig, globalIgnores } from 'eslint/config';
import eslintPluginPrettier from 'eslint-plugin-prettier/recommended';

export default defineConfig([
  globalIgnores(['**/node_modules', '**/dist']),
  {
    files: ['**/*.{js,mjs,cjs}'],
    plugins: { js },
    extends: ['js/recommended'],
  },
  {
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: { globals: { ...globals.node, ...globals.browser } },
  },
  {
    files: ['**/*.css'],
    plugins: { css },
    language: 'css/css',
    extends: ['css/recommended'],
  },
  {
    rules: {
      'no-unused-vars': 'warn',
      'capitalized-comments': ['error', 'always'],
    },
  },
  eslintPluginPrettier,
]);
