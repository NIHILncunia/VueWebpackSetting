module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    commonjs: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: false,
    },
    parser: 'babel-eslint',
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/recommended',
  ],
  plugins: [
    'import',
  ],
  rules: {
    'no-console': 0,
    'no-unused-vars': 1,
    'no-unexpected-multiline': 0,
    'no-empty': 1,
    'semi': [ 2, 'always', ],
    'quotes': [ 1, 'single', { allowTemplateLiterals: true, }, ],
    'eol-last': [ 1, 'never', ],
    'space-before-function-paren': 0,
    'array-bracket-spacing': [ 1, 'always', {
        arraysInArrays: true,
        singleValue: true,
        objectsInArrays: true,
      }, ],
    'arrow-parens': 0,
    'comma-spacing': [ 1, { before: false, after: true, }, ],
    'comma-dangle': [ 1, {
      arrays: 'always',
      functions: 'never',
      objects: 'always',
      imports: 'never',
      exports: 'never',
    }, ],
    'block-spacing': [ 1, 'always', ],
    'func-call-spacing': [ 1, 'never', ],
    'object-curly-spacing': [ 1, 'always', ],
    'arrow-spacing': [ 1, { 'before': true, 'after': true, }, ],
    'keyword-spacing': [ 1, {
      overrides: {
        'if': { 'before': true, 'after': true, },
        'for': { 'before': true, 'after': true, },
        'while': { 'before': true, 'after': true, },
      },
    }, ],

    'jsx-quotes': [ 1, 'prefer-single', ],

    'vue/html-self-closing': 0,
    'vue/html-quotes': [ 1, 'double', { avoidEscape: true, }, ],
    'vue/attributes-order': 0,
    'vue/max-attributes-per-line': 0,
    'vue/v-on-style': 0,
    'vue/v-bind-style': 0,
    'vue/singleline-html-element-content-newline': 0,
  },
};