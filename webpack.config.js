const path = require('path')

module.exports = {
  // 模式
  mode: 'development', // 开发的模式
  // mode: 'production', // 生产的模式

  // 入口
  entry: './src/index.js',

  // 出口
  output: {
    // 打包文件夹
    path: path.resolve(__dirname, 'dist'),
    // 打包文件
    filename: 'wang_utils.js',
    // filename: '190719-utils.min.js',
    library: 'wUtils', // 向外暴露的对象的名称
    libraryTarget: 'umd', // 针对 esm / commonjs
  }
}