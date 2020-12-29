module.exports = {
  'root': true,
  'env': {
    'browser': true,
    'commonjs': true,
    'es6': true,
    'node': true,
  },
  'extends': [
    'eslint:recommended',
    'plugin:vue/recommended',
  ],
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly',
  },
  'parserOptions': {
    'ecmaVersion': 2020,
    'sourceType': 'module',
    'ecmaFeatures': {
      'jsx': false,
    },
    'parser': 'babel-eslint',
  },
  'plugins': [
    'import',
  ],
  'rules': {
    'no-console': 0,
    'no-unused-vars': 1,
    'no-unexpected-multiline': 0,
    'no-empty': 1,
    'semi': [ 2, 'always', ],
    'eol-last': [ 1, 'never', ],
    'space-before-function-paren': [ 1, 'never', ],
    'comma-dangle': [ 1, {
      'arrays': 'always',
      'objects': 'always',
    }, ],
    'array-bracket-spacing': [ 1, 'always', ],
    'quote-props': [ 1, 'always', ],
    'quotes': [ 1, 'single', ],

    'vue/html-self-closing': 0,
    'vue/attributes-order': 0,
    'vue/max-attributes-per-line': 0,
    'vue/v-on-style': 0,
    'vue/v-bind-style': 0,
    'vue/singleline-html-element-content-newline': 0,
  },
};