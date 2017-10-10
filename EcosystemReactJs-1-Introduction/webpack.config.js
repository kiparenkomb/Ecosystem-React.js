const path = require('path'); // зарекваерим path-module

module.exports = {
	// context: __dirname,
	// entry: "./src/index.js",
	entry: path.join(__dirname, 'src', 'index.js'), // в экспортируемый обьект добавим 
	// проперти ентри, это входная точка для Webpack (тот файл к-й он загрузит первым).
	// Мы можем не использовать path, а указать относительный путь строкой, но возможны
	// проблемы в разных операционных системах. Поэтому генерируем путь с использованием
	// __dirname и path.join

	output: {// теперь укажем конфиг для output
		// path: 'public', // !не работает!
		// path: __dirname + "/public",
		path: path.resolve(__dirname, 'public'), // укажем папку куда Webpack будет выгружать созданые файлы по окончанию билда
		filename: 'bundle.js', // и укажем файл нейм, это имя файла к-й будет создан по окончанию билда
	},

	module: {
		loaders: [{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel-loader'
		}]
	}
};
