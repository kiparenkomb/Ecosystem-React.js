<p align="center">
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/140px-React-icon.svg.png" alt="" height="100">
</p>

# Ecosystem React.js - # 2 - Webpack-dev-server
[Video lesson](https://www.youtube.com/watch?v=MkOauWC0Uq8)

### КЛЮЧЕВЫЕ СЛОВА:
* Node.js
* npm
* React.js
* Webpack
* Webpack-dev-server
* Babel
* Hot Module Replacement

“Hot Module Replacement” (HMR) is a feature to inject updated modules into the active 
runtime. It's like LiveReload for every module. HMR is “opt-in”, so you need to put 
some code at chosen points of your application. The dependencies are handled by the 
module system.


## СОЗДАНИЕ WEBPACK-DEV-SERVER (ПЕРВЫЙ СПОСОБ)
1. Проверяем актуальность версий:
	* $ `npm -v`
	* $ `node -v`
	* $ `webpack -v`
	* $ `npm webpack-dev-server -v`
1. Если чегото не хватает, тогда недостающий компонент устанавливаем

1. А также инициализируем **npm**
	* $ `npm install`
1. Устанавливаем **plugin webpack-dev-server** в папке проекта
	* [Official site - docs](https://webpack.js.org/guides/development/#using-webpack-dev-server)
	* $ `npm install --save webpack-dev-server`
1. Вставляем в файл `packge.json` (добавив просто в секцию `"scripts": {`)
	```bash
	"server": "webpack-dev-server --content-base ./public --inline --hot"
	// это путь к нашей папке с index.html путь указываеться для того, что бы если наша папка существует, то локалхост запускался в этой папке, в противном случае webpack запустил бы  сервер в корне package.json --inline - это инструкция для webpack добавить в сборку рефреш клиент, для перезагрузки страници в случае изменения какого-либо файла --hot (Hot Module Replacement) - это инструкция для webpack с указанием для сборки бандла с HMR поддержкой - этот модуль спрашивает сервер в реальном времени не изменились ли какие-то фаилы без перезагрузки страници
	```
1. Запускаем сервер
	* $ `npm run server`


## СОЗДАНИЕ WEBPACK-DEV-SERVER (ВТОРОЙ  СПОСОБ)
1. Устанавливаем **plugin webpack-dev-server** в папке проекта
	* [Official site - docs](https://webpack.js.org/guides/development/#using-webpack-dev-server)
	* $ `npm install --save webpack-dev-server`
1. Вставляем в файл `webpack.config.js` (добавив просто в секцию `module.exports = {`)
	```bash
	devServer: {
		contentBase: path.join(__dirname, 'public')
	}
	```
1. Вставляем в файл `packge.json` (добавив просто в секцию `"scripts": {`)
	```bash
	"start": "webpack-dev-server --open"
	```
1. Запускаем сервер
	* $ `npm start`