// todo adjust aliases
const perfectionist = {
  'perfectionist/sort-imports': [
    'error',
    {
      groups: [ ['react', 'external'], 'aliases', 'internal'],
      'newlines-between': 'always',
      'custom-groups': {
        value: {
          react: ['react', 'react-*'],
          aliases: [ '@modules/**', '@models', '@routing/**', '@common/**', '@utils/**', '@store/**' ]
        }
      }
    }
  ],

  'perfectionist/sort-jsx-props': [
    'error',
    {
      groups: ['key', 'className', 'multiline', 'unknown', 'shorthand', 'callback'],
      'custom-groups': { callback: 'on*', key: 'key', className: 'className' }
    }
  ],

  'perfectionist/sort-enums': 'error',
};

const prettier = {
  'prettier/prettier': ['error', {
    printWidth: 100,
    trailingComma: 'es5',
    semi: true,
    jsxSingleQuote: true,
    singleQuote: true,
    useTabs: false,
    endOfLine: 'auto',
    'max-len': ['error', { code: 100 }]
  }],
}

// todo check readme about lint
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
    ...prettier,

    ...perfectionist,

    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-namespace': 'off',
    'no-duplicate-imports': 'error',
    'no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'error',

    'unused-imports/no-unused-vars': [
      'error',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_'
      }
    ]
  },
}
