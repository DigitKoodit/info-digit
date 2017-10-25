var path = require('path')
var webpack = require('webpack')
var HTMLWebpackPlugin = require('html-webpack-plugin')
var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
	template: __dirname + '/src/index.html',
	filename: 'index.html',
	inject: 'body'
})

module.exports = {
	entry: './src/index.js',
	output: {
		path: __dirname + '/public',
		filename: 'bundle.js'
	},
	plugins: [HTMLWebpackPluginConfig],
	module: {
		loaders: [
			{ test: /(\.css$)/, loaders: ['style-loader', 'css-loader'] },
			{ test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' },
			{
				test: /.jsx?$/,
				loader: 'babel-loader',
				exclude: '/node-modules/',
				query: {
					presets: [
						'react',
						['env', {
							targets: {
								'browsers': 'last 3 versions'
							}
						}]
					]
				}
			}
		]
	}
}
