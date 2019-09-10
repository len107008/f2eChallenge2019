const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: './index.js',  // 若沒設定 content 則要寫 `./src/index.js`
  output: {
    path: path.resolve(__dirname, 'dist/js'),
    filename: 'index.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /(node_modules)/,
        use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'] 
            }
          }
        },
      {
        test: /\.scss$/,
        use: [
          {
          loader: MiniCssExtractPlugin.loader
        }, //後
          'css-loader', //次
          'sass-loader' //先
        ]
      },
      {
        test: /\.(png|jpg|gif|jpe?g|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              publicPath: '../../dist/image',
              emitFile: false
            }  
          }
        ]
      } 
    ]
  },
  plugins: [
    // 將樣式輸出成 css 檔
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '../stylesheets/[name].css',
      chunkFilename: '../stylesheets/[id].css'
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),  // 網站內容從哪來，預設會使用 '/'
    publicPath: '/assets/',    // 打包好的檔案將在這個路由下取用
    compress: false,       // 使用 gzip 壓縮
    port: 8080,
    index: 'index.html',
    hot: true,            // 使用 HMR
    host: '0.0.0.0',            // 預設是 localhost，設定則可讓外網存取
    open: true           // 打開瀏覽器
  }
}
