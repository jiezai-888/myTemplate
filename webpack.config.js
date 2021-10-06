const path=require('path');

module.exports={
	mode:'development',
	entry:'./index.js',
	output:{
		filename:'bundle.js'
	},
	devServer:{
		contentBase:path.join(__dirname,"www"),
		compress:false,
		port:8080,
		publicPath:"/xuni/"
	}
};