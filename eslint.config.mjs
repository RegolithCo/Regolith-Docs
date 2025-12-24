import js from '@eslint/js'
import tseslint from '@typescript-eslint/eslint-plugin'
import tsparser from '@typescript-eslint/parser'
import reactPlugin from 'eslint-plugin-react'
import prettierPlugin from 'eslint-plugin-prettier'

export default [
  js.configs.recommended,
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx', '**/*.mjs', '**/*.cjs'],
    languageOptions: {
      parser: tsparser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
      },
      globals: {
        // Browser globals
        window: 'readonly',
        document: 'readonly',
        navigator: 'readonly',
        console: 'readonly',
        HTMLElement: 'readonly',
        HTMLCanvasElement: 'readonly',
        CanvasRenderingContext2D: 'readonly',
        CanvasGradient: 'readonly',
        ResizeObserver: 'readonly',
        ResizeObserverEntry: 'readonly',
        requestAnimationFrame: 'readonly',
        cancelAnimationFrame: 'readonly',
        setTimeout: 'readonly',
        clearTimeout: 'readonly',
        setInterval: 'readonly',
        clearInterval: 'readonly',

        // Node globals (for config files)
        process: 'readonly',
        __dirname: 'readonly',
        module: 'readonly',
        require: 'readonly',
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
      react: reactPlugin,
      prettier: prettierPlugin,
    },
    rules: {
      ...tseslint.configs.recommended.rules,
      ...reactPlugin.configs.recommended.rules,
      ...prettierPlugin.configs.recommended.rules,
      'react/no-unknown-property': ['error', { ignore: ['css'] }],
      'no-use-before-define': 'off',
      '@typescript-eslint/no-use-before-define': 'off',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],
      'no-explicit-any': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-empty-interface': 'off',
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
      'no-undef': 'off', // TypeScript handles this
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  {
    ignores: [
      '**/src/**/*.svg',
      '**/src/**/*.css',
      '**/dist/**',
      '**/*.js',
      '**/node_modules/**',
      '**/src/schema/**',
      '**/src/mock/**',
    ],
  },
]
