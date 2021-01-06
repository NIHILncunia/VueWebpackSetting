module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    commonjs: true,
    es6: true
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: false
    },
    parser: 'babel-eslint'
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  extends: [
    '@nuxtjs',
    'eslint:recommended',
    'plugin:nuxt/recommended',
    'plugin:vue/recommended'
  ],
  plugins: [
    'import'
  ],
  rules: {
    'no-console': 0,
    'no-unused-vars': 1,
    'no-unexpected-multiline': 0,
    'no-empty': 1,
    semi: [ 2, 'always' ],
    'eol-last': [ 1, 'never' ],
    'space-before-function-paren': 0,
    'array-bracket-spacing': [ 1, 'always' ],
    'arrow-parens': [ 0, 'always' ],

    'vue/html-self-closing': 0,
    'vue/attributes-order': 0,
    'vue/max-attributes-per-line': 0,
    'vue/v-on-style': 0,
    'vue/v-bind-style': 0,
    'vue/singleline-html-element-content-newline': 0
  }
};