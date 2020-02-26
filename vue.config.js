const path = require('path')
function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
	// 将entry指向examples
	pages: {
		index: {
			entry: 'examples/main.js',
			template: 'public/index.html',
			filename: 'index.html'
		}
	},
	// 为packages目录添加babel-loader处理
	chainWebpack: config => {
		config.module
		.rule('js')
		.include
			.add(resolve('packages'))
			.end()
		.use('babel')
			.loader('babel-loader')
			.tap(options => {
				return options
			})
	},
	// 不单独提取样式
	css: {extract: false},
	// 基本路径 baseURL已经过时
	publicPath: './',
	// 输出文件目录
	outputDir: 'lib',
	// eslint-loader 是否在保存的时候检查
	lintOnSave: true,
	// use the full build with in-browser compiler?
	// https://vuejs.org/v2/guide/installation.html#Runtime-Compiler-vs-Runtime-only
	// compiler: false,
	// webpack配置
	// see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
	configureWebpack: () => {},
	// vue-loader 配置项
	// https://vue-loader.vuejs.org/en/options.html
	// vueLoader: {},
	// 生产环境是否生成 sourceMap 文件
	productionSourceMap: false,
	parallel: require('os').cpus().length > 1,
	// 是否启用dll
	// See https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md#dll-mode
	// dll: false,
	// PWA 插件相关配置
	// see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
	pwa: {},
	// webpack-dev-server 相关配置
	devServer: {
		open: true,
		host: 'localhost', //如果是真机测试，就使用这个IP
		port: 8080,
		https: false,
		hotOnly: false,
		proxy: {
			//配置跨域
			'/api': {
				target: "http://192.168.234.237:8886/api",
				ws: true,
				changOrigin: true,
				pathRewrite: {
					'^/api': '/'
				}
			}
		}
	},
	// 第三方插件配置
	pluginOptions: {
		// ...
	}
}
