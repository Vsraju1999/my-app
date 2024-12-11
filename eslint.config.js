import js from '@eslint/js';
import react from 'eslint-plugin-react';
import typescript from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';

export default [
  js.configs.recommended,
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: typescriptParser,
      sourceType: 'module',
      globals: {
        document: 'readonly',
        window: 'readonly',
        HTMLElement: 'readonly',
        // Add any other browser globals you might need
      },
    },
    plugins: {
      react,
      '@typescript-eslint': typescript,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      // Example rules
      'react/react-in-jsx-scope': 'off',
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    },
  },
];
