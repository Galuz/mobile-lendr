module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  plugins: [],
  // add your custom rules here
  rules: {
    quotes: ['error', 'single'],
    'comma-dangle': ['error', 'never'],
    'no-param-reassign': ['error', { props: false }],
    'import/extensions': ['off', 'never'],
    'import/prefer-default-export': 'off',
    'vue/html-quotes': ['error', 'double'],
    'vue/max-attributes-per-line': ['error', {
      singleline: 3,
      multiline: {
        max: 1,
        allowFirstLine: false
      }
    }]
  }
}
