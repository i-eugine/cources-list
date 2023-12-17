module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'prettier'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'prettier', 'unused-imports', 'perfectionist'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],

    'prettier/prettier': ['error',{
      printWidth: 100,
      trailingComma: 'es5',
      semi: true,
      jsxSingleQuote: true,
      singleQuote: true,
      useTabs: false,
      endOfLine: 'auto',
      'max-len': ['error', { code: 100 }]
    }],


    'perfectionist/sort-imports': [
      'error',
      {
        groups: [
          ['react', 'external'],
          'aliases',
          'internal'
        ],
        'newlines-between': 'always',
        'custom-groups': {
          value: {
            react: ['react', 'react-*'],
            aliases: [ /** TODO */]
          }
        }
      }
    ],

    'perfectionist/sort-jsx-props': [
      'error',
      {
        groups: ['key', 'multiline', 'unknown', 'shorthand', 'callback'],
        'custom-groups': { callback: 'on*', key: 'key'}
      }
    ],

    'perfectionist/sort-enums': 'error',

    '@typescript-eslint/no-namespace': 'off',
    'no-duplicate-imports': 'error',
    'no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'error',

    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_'
      }
    ]
  },
}
