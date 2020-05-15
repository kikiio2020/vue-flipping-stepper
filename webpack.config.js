const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

var baseConfig = {
	mode: 'production',
	output: {
	    path: path.resolve(__dirname + '/dist/')
	},
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
	    				presets: ['@babel/preset-env']
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
	    new VueLoaderPlugin(),
	],
	externals: {
		BButton: 'BButton',
		BTooltip: 'BTooltip',
		BIconArrowRight: 'BIconArrowRight',
		BIconArrowLeft: 'BIconArrowLeft',
	}
};

module.exports = [
	merge(
		baseConfig, 
		{
			entry: path.resolve(__dirname + '/src/plugin.js'),
			output: {
				filename: 'flipping-stepper.min.js',
				libraryTarget: 'window',
				library: 'FlippingStepper'
			}
		}
	),
	merge(
		baseConfig,
		{
			entry: path.resolve(__dirname + '/src/FlippingStepper.vue'),
			output: {
				filename: 'flipping-stepper.js',
				libraryTarget: 'umd',
				library: 'flipping-stepper',
				umdNamedDefine: true
			}
		}
	)
];
