const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  resolve: {
    extensions: [ '.js', '.vue', ],
    alias: {
      '@': path.resolve(__dirname, 'src/'),
      '@/components': path.resolve(__dirname, 'src/components/'),
      '@/store': path.resolve(__dirname, 'src/store/'),
      '@/utils': path.resolve(__dirname, 'src/utils/'),
      '@/pages': path.resolve(__dirname, 'src/pages/'),
      '@/layouts': path.resolve(__dirname, 'src/layouts/'),
      '@/images': path.resolve(__dirname, 'src/images/'),
      '@/styles': path.resolve(__dirname, 'src/styles/'),
    },
  },
  entry: {
    app: path.resolve(__dirname, 'src', 'index'),
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader',
      },
      {
        test: [ /\.s[ac]ss$/i, /\.css$/i, ],
        use: [
          'vue-style-loader',
          {
            loader: 'css-loader',
            options: {
              esModule: false,
            },
          },
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
  ],
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'build'),
  },
};