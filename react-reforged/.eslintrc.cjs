const perfectionist = {
  'perfectionist/sort-imports': [
    'error',
    {
      groups: [ ['react', 'external'], 'aliases', 'internal'],
      'newlines-between': 'always',
      'custom-groups': {
        value: {
          react: ['react', 'react-*'],
          aliases: [
            '@modules/**', '@models', '@routing/**', '@utils/**', '@store/**',
            '@components', '@hooks/**','@loaders', '@common-modules/*','@services',
        ]
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

module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/jsx-runtime',
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
    ],

    'no-restricted-imports': [
      'error', 
      {
        patterns: [
          {
            group: ['@**/*/*', '[a-zA-Z]**/*/*', '!@modules/**'],
            message: 'Imports with level 2 or more are not allowed'
          },
          {
            group: ['../', ],
            message: 'Parent imports are not allowed'
          }
        ],
        paths: [
          {
            name: 'react',
            importNames: ['React', 'FC'],
            message: 'No need to import React in 18 version.'
          },
          
        ]
      }
    ],


    // using mobx stores directly in template brokes rerendering
    "no-restricted-syntax": [
      "error",
      {
        selector: "MemberExpression[property.type='Identifier'][property.name!='length'][object.name=/.*Store.*/]",
        message: "Direct access Stores allowed. Use destructuring instead.",
      },
    ],
  },
}
