module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: 'airbnb-base',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  rules: {
    semi: ['error', 'never'],
    indent: ['error', 2],
    'comma-dangle': ['error', 'never'],
    'no-console': ['error', { allow: ['info', 'warn', 'error'] }],
    'array-callback-return': 0
  },
  ignorePatterns: ['*.json']
}
