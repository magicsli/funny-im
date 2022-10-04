module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended' 
  ],
  plugins: ['eslint-plugin-react'],
  env: {
    // 浏览器全局变量
    browser: true,
    // Node.js 全局变量和作用域
    node: true,
    // CommonJS全局变量和CommonJS作用域
    commonjs: true,
    // 启用除模块之外的所有ECMAScript 6功能
    es6: true,
  },

  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: { jsx: true },
  },

  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g. "@typescript-eslint/explicit-function-return-type": "off",
    // 0:"off", 1:"warn", 2:"error"
    semi: 0,
    '@typescript-eslint/no-empty-interface': 1,
    '@typescript-eslint/no-empty-function': 1,
    "@typescript-eslint/no-explicit-any": 0,
    "@typescript-eslint/no-non-null-assertion": 0,
    '@typescript-eslint/ban-types': 1,
    'no-use-before-define': 0,
    '@typescript-eslint/no-use-before-define': 2,
    'no-shadow': 0,
    '@typescript-eslint/no-shadow': 2,
    'no-multiple-empty-lines': [
      2,
      {
        max: 2,
        maxEOF: 1
      }
    ]
  },
  settings: {
    react: {
      version: 'detect' // Tells eslint-plugin-react to automatically detect the version of React to use
    }
  }
}
