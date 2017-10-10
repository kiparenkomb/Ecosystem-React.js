<p align="center">
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/140px-React-icon.svg.png" alt="" height="100">
</p>

# Ecosystem React.js - #1 - Introduction
[Video lesson](https://www.youtube.com/watch?v=EYAK-ZZFWSg)

### КЛЮЧЕВЫЕ СЛОВА:
* Node.js
* npm
* React.js
* Webpack
* Babel

## УСТАНОВКА
1. Проверяем версию **Node.js**
`node -v`
1. Если его нет то устанавлинваем **Node.js** (в случае необходимости)
[Official site](https://nodejs.org/en/)
1. Проверяем версию **npm**
`npm -v`
1. Если его нет то устанавливаем **npm** (в случае необходимости)
[Official site](https://www.npmjs.com/)
[Official site - docs](https://docs.npmjs.com/)
1. Иницилизируем **npm** в папке проекта
`npm init`
1. Заполняем или пропускаем данные клавишей **Enter**

1. Устанавливаем **React.js** в папке проекта
[Official site](https://reactjs.org/)
[Official site - docs](https://reactjs.org/docs/installation.html)
`npm install --save react react-dom`
1. Устанавливаем сборщик модулей **Webpack** в папке проекта
[Official site](https://webpack.github.io/)
[Official site - docs](http://webpack.github.io/docs/tutorials/getting-started/)
`npm install --save webpack`
1. Устанавливаем **plugin Webpack** в папке проекта
[Official site - docs](https://webpack.js.org/plugins/npm-install-webpack-plugin/#src/components/Sidebar/Sidebar.jsx)
`npm install --save npm-install-webpack-plugin`
1. Устанавливаем **Babel is a JavaScript compiler** в папке проекта
[Official site](https://babeljs.io/)
`npm install --save babel-cli babel-preset-env`
1. Создаем файл `.babelrc` и копируем готовый конфиг для **Babel CLI**
```bash
{
	"presets": ["env"]
}
```


## СОЗДАНИЕ ФАЙЛОВ
1. В папке проекта создадим папку **src**

1. В этой папке создадим файл **index.js** и импортим **React.js**
```bash
import React from 'react';
import { render } from 'react-dom';
render{
	<div>
		Hello react!
	</div>,
	document.getElementById('root')
};
```
1. Теперь настроем **Webpack** для того, что бы он собрал файл и скомпелировал его в **ECMAScript 5**
1. В корне создаем файл **webpack.config.js** и в нем зарекваерим **path-module**
`const path = require('path');`
	* зарекваерим path-module

1. И создадим **конфиг** для **Webpack**
[webpack.config.js - example](https://gist.github.com/learncodeacademy/25092d8f1daf5e4a6fd3)
```bash
module.exports = {
	entry: path.join(__dirname, 'src', 'index.js'),
```
		* в экспортируемый обьект добавим проперти ентри, это входная точка для Webpack (тот файл к-й он загрузит первым). Мы можем не использовать path, а указать относительный путь строкой, но возможны проблемы в разных операционных системах. Поэтому генерируем путь с использованием __dirname и path.join
```bash
	output: {
```
		* теперь укажем конфиг для outputa
```bash
		path: path.resolve(__dirname, 'public'),
```
			* укажем папку куда Webpack будет выгружать созданые файлы по окончанию билда
```bash
		filename: 'bundle.js',
```
			* и укажем файл нейм, это имя файла к-й будет создан по окончанию билда
```bash
	},
};
```

1. Устанавливаем через консоль плагин **preset-react**
[Official site - docs](https://babeljs.io/docs/plugins/preset-react/)
`npm install --save babel-cli babel-preset-react`
	* можно без пакета babel-cli
1. Копируем готовый конфиг для **preset-react**, и вставляем в файл `.babelrc` (добавив просто в массив)
```bash
{
	"presets": ["env", "react"]
}
```
1. Устанавливаем через консоль плагин **preset-es2015**
[Official site - docs](https://babeljs.io/docs/plugins/preset-es2015/)
`npm install --save babel-cli babel-preset-es2015`
	* можно без пакета babel-cli
1. Копируем готовый конфиг для **preset-es2015**, и вставляем в файл `.babelrc` (добавив просто в массив)
```bash
{
	"presets": ["env", "react", "es2015"]
}
```
1. Устанавливаем через консоль плагин **babel-loader**
`npm install --save babel-loader`
1. Копируем готовый конфиг для **babel-loader**, и вставляем в файл `webpack.config.js` (добавив просто в `module.exports = {`)
[Official site - docs](https://webpack.github.io/docs/usage.html)
```bash
module: {
	loaders: [{
		test: /\.js$/,
		exclude: /node_modules/,
		loader: 'babel-loader'
	}]
}
```
1. В корне создаем папку `public` и запускаем в консоле **Webpack**:
`webpack`

## СОЗДАНИЕ HTML ФАЙЛА

* Копируем с официального сайта **Webpack** код html и создает документ
	[Official site](https://webpack.js.org/)
```bash
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<title>Document</title>
	</head>
	<body>
		<div id="root"></div>


		<script src="bundle.js"></script>
	</body>
</html>
```