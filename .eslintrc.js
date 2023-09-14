module.exports = {
  parser: "babel-eslint",
  // 指定程序的目标环境
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
  },
  rules: {
    // 结尾不使用分号
    semi: ['error', 'never'],
    // 使用单引号
    quotes: ['error', 'single'],
    // 文件最多200行
    'max-lines': ['error', 200],
    // 方法最多80行数
    'max-lines-per-function': ['warn', 80],
    // 检测未使用变量
    'no-unused-vars': 'error',
    // 检测未定义的变量
    'no-undef': 'error',
    // 禁止空的代码块
    'no-empty': 'error',
    'no-console': 'off',
    // 禁止超过2行的空行
    'no-multiple-empty-lines': 'error',
    // 禁止行末有多余的空格
    'no-trailing-spaces': 'error',
    // 推荐使用 let 或 const 替代 var
    'no-var': 'warn',
    // 推荐使用 const 声明不会被修改的变量
    'prefer-const': 'warn',
    // 推荐使用严格相等运算符 === 和 !==
    eqeqeq: 'error',
     //每个缩进占几个字符(1tab = 4空格)
     indent: ['error', 4],
  },
  ignorePatterns: ['lib/', 'node_modules/', '.eslintrc.js'],
}
