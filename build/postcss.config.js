
// 添加css前缀
const autoprefixer = require('autoprefixer')({
	browsers: [
		'> 1%',
		'last 2 versions',
		'iOS >= 8',
    'Safari >= 8',
		'not ie <= 8'
	]
})
module.exports = {
	loader: 'postcss-loader',
	options: {
		plugins: [
			autoprefixer
		]
	}
}