const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
	mode: 'development',
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader'
				]
			},
			{
				test: /\.scss$/,
				use: [
					'style-loader',
					'css-loader',
					'sass-loader'
				]
			}
		]
	},
	devServer: {
		watchFiles: ['./index.html', 'src/**'],
		static:  {
			directory: path.join(__dirname, 'dist'),
			watch: {
				usePolling: false,
			},
		},
	},
	target: 'web',
	plugins: [
		new HtmlWebpackPlugin({
		  	template: "index.html",
		}),
	],
};

module.exports = config;