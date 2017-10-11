<p align="center">
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/140px-React-icon.svg.png" alt="" height="100">
</p>

# Ecosystem React.js - # 3 - element, class, component
[Video lesson](https://www.youtube.com/watch?v=UeDJDtOFpTg)

### КЛЮЧЕВЫЕ СЛОВА:
* Node.js
* npm
* React.js
* Webpack
* Webpack-dev-server
* Babel
* React one-way data flow directions
* `props`
* Reconciliation
* Virtual DOM
* `JSX`


“React one-way data flow directions” - The official docs say that it gives you the control over how data flows throughout your app.

Unidirectional data flow is a technique found in functional reactive programming. React doesn't encourage bi-directional binding to make sure you are following a clean data flow architecture. The major benefit of this approach is that data flows throughout your app in a single direction and you have better control over it (we'll see how). Also the application state is contained in specific stores and as a result different components of your app remain loosely coupled.
[__Sandeep Panda__](https://hashnode.com/post/why-does-react-emphasize-on-unidirectional-data-flow-and-flux-architecture-ciibz8ej600n2j3xtxgc0n1f0)


## Element

1. **Елемент** - это `js` обьект, к-й описывает инсес `React component'a` (другими словами это метод, через к-й мы говорим `React'у`, что мы хотим видеть на экране), но вызвать какие-либо методы элемента мы не можем! Пото-му что это всего лишь обьект с двумя полями - тип(строка или компонент) и пропс.
	* Содержит информацию о типе компонента (`type: Button`)
	* И его свойства (`props: { color: 'red' }`)
1. Пример:
	```bash
	{
		type: Button,
		props: {
			color: 'red',
		}
	}
	{
		type: 'button',
		props: {
			classname: 'button-red',
		}
	}
	```
1. В случае если в типе указана строка, то этот элемент представляет `DOM` обьект (например: <div>, <button>, <textarea>)
1. React елементы могут быть вложены друг в друга, для этого используеться пропс, к-й называеться `children`. Преймущиство этого подхода в том что этот js обьект, и их не надо парсить, и также они легче чем `DOM` елементы
	```bash
	{
		type: Button,
		props: {
			color: 'red',
			children: [{
				type: grayButton,
			}]
		}
	}
	```

## Class

1. Когда компонент описан как `класс`, то етот подход более **мощьный**, с той точки зрения что теперь мы можем использовать **локальные данные** стейд компонента, а также **методы**
1. В итоге React смотрит на тип елемента, и если это компонент, то React идет в низ по дереву чилдренов пока не найдет нужный тег. Таким образом React знает полное итоговое дерево `DOM` обьекта, поэтому React, может найти быстрый способ как его обновить - `Reconciliation`.
	```bash
	class TextArea extends React.Component {
		render() {
			return (
				<textarea>
				</textarea>
			)
		}
	}
	```


## Component

1. **Smart component** - это умные компоненты, к-е вычисляют все данные, вычислять и запрашивать с сервера и т.д.
1. **Usual component** - это глупые компоненты, должны только рендерить то что им пришло в `props'х` 


## Пример, что такое Component
### Приложение будет отображать список user взятых с github.api

1. Нам понадобиться компонент user-logist
	* [Official site](https://developer.github.com/v3/users/)

1. Перейдем на сайт открытого API github и перейдем в секцию `/user`
	* [Official site - docs](https://developer.github.com/v3/users/#get-all-users)
	* [Скопируем код json](https://api.github.com/users?since=135) и создадим свой


1. В папку `src` добавляем следующую структуру:
	```bash
	| src
		| bundles
			| Users
				| components
					| UsersList
						| index.js
							+ export { default as UsersList } from './UsersList';
							+ export { default as UsersListContainer } from './UsersListContainer';
						| UsersList.js
						| UsersListContainer.js
	```

1. Файл `UsersList.js` - это **Usual component** и `UsersListContainer.js` - это **Smart component**
1. В файлах `UsersList.js` и `UsersListContainer.js` рендерим наших user
1. В файле `index.js` мы экспортим наши 2 файла `UsersList.js` и `UsersListContainer.js`
	```bash
	export { default as UsersList } from './UsersList';
	export { default as UsersListContainer } from './UsersListContainer';
	```
1. В корне src в файле `index.js` (entry point) мы импортим наш лист и рендорим его в рутовый див (в пути указываем только имя папки, без укзания конкретного файла, в этом случае `Webpack` будем искать `index.js` в этой папке)
	```bash
	import React from 'react';
	import { render } from 'react-dom';
	import { UsersListContainer } from './bundles/Users/components/UsersList';
	render(
		<UsersListContainer />,
		document.getElementById('root')
	);
	```
1. Переходим в файл `UsersListContainer.js` - и импортим `UsersList.js` и экспортировать его же, для проверки что все собираеться и работает
	```bash
	import UsersList from './UsersList';
	export default UsersList;
	```
1. Переходим в файл `UsersList.js` - создадим класс и отрендерим любое сообщение
	```bash
	import React, { Component } from 'react';
	export default class UsersList extends Component {
		render() {
			return (
				<div>
					This is Users list
				</div>
			)
		}
	}
	```
1. Запускаем сервер
	* $ `npm start`
1. Если вывелось сообщение: `This is Users list`, значит вы не допустили ошибку, как это сделал я))))
1. Теперь добавим наши данные с файла `json`, переходим в наш умный компонент `UsersListContainer.js` - и создаем масив
	```bash
	const mockData = [
		***копируем несколько элементов из нашего json масива***
	]
	```
1. В файл `UsersList.js` передаем наш `mockData`, изменив несколько строк в файле `UsersListContainer.js`
	```bash
	// export default UsersList;
	export default <UsersList users={mockData} />;
	```
1. Также если мы используем `JSX`, мы должны заимплитить React в файле `UsersListContainer.js`
	```bash
	import React from 'react';
	```


* `JSX` - это разширение для `js` и `html`
	* [Official site - docs](https://reactjs.org/docs/introducing-jsx.html)
* `JSX` создан для более удобной локации компонентов и шаблонов, все находиться в одном файле, и `js` и `html`
* Композиция компонентов - приложение состоит из маленьких кусочков, и все они должны быть переиспользуемыми
* `JSX` в итоге превращаеться в обычный `js`, а все теги `html` превращаються в классы, этим превращением занимаеться `Babel js`
* Также в место `JSX`, можно использовать **ECMAScript 5**

* [Official site](https://www.npmjs.com/)
	* [Official site - docs](https://docs.npmjs.com/)