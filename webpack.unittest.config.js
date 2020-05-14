const webpack = require('webpack');
const merge = require('webpack-merge');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = merge(webpack[0], {
	mode: 'development',
	module: {
	    rules: [
	    	{
	    		test:/\.vue$/,
	    		loader: 'vue-loader'
	    	},
	    	{
	    		test: /\.js$/,
	    		exclude: /node_modules/,
	    		use: {
	    			loader: 'babel-loader',
	    			options:{
	    				presets: ['@babel/preset-env'],
	    				plugins: ['@babel/plugin-transform-runtime']
	    			}
	    		}
	    	},
	    	{
	    		test:/\.css$/,
	    		use:[
	    			'vue-style-loader',
	    			'css-loader'
	    		]
	    	}
	    	
	    ],
	},
	plugins: [
	    new VueLoaderPlugin()
	],
	externals: {
		BIconPlayFill: 'BIconPlayFill',
		BIconSkipBackwardFill: 'BIconSkipBackwardFill',
		BButton: 'BButton',
		BTooltip: 'BTooltip', 
	}
});