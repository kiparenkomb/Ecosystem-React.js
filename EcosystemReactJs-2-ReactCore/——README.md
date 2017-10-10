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
* React one-way data flow directions
* `props`
* Reconciliation
* Virtual DOM
* `JSX`


“React one-way data flow directions” - The official docs say that it gives you the control over how data flows throughout your app.

Unidirectional data flow is a technique found in functional reactive programming. React doesn't encourage bi-directional binding to make sure you are following a clean data flow architecture. The major benefit of this approach is that data flows throughout your app in a single direction and you have better control over it (we'll see how). Also the application state is contained in specific stores and as a result different components of your app remain loosely coupled.
[__Sandeep Panda__](https://hashnode.com/post/why-does-react-emphasize-on-unidirectional-data-flow-and-flux-architecture-ciibz8ej600n2j3xtxgc0n1f0)


## ОСНОВНЫЕ ОСОБЕНОСТИ

* [Official site - docs](https://reactjs.org/docs/installation.html#installing-react)


### Пример, что такое `props` и пример использования
1. Основной ресурс #components-and-props:
	* [Official site - docs](https://reactjs.org/docs/components-and-props.html)
1. Отвечает за общение между **Родителем** и **Чаелдом** свойство `props`
	```bash
	import React from 'react';
	import { render } from 'react-dom';
	function testUrl() {
		const Avatar = (props) => (
			console.log(props),
			<div>
				This is an avatar: { props.url }
			</div>
		);
		const Header = (props) => (
			console.log(props),
			<div>
				new messages: { props.unreadMessages }
				<br/>
				Its Header: { props.url }
				<Avatar url={ props.url } />
			</div>
		);
		render(
			<div>
				<Header url="nameTest" unreadMessages="2" />
			</div>,
			document.getElementById('root')
		);
	}
	testUrl();
	```
1. Данные могут течь только с верху в низ, и ни как по другому, т.е. **от Родителя к Потомку**. В данном примере `url` приходит в **Header** и перетекает от него в **Avatar**
1. Одно место для внесения данных, где хранятся данные приложения, что помогает выявлять ошибки


## Пример, что такое Виртуальный дом

1. **Виртуальный дом** - это представления реального дома в виде **js обьекта**
1. При каждом изменении `DOM` (изменеение компонентов, изменение `props` и т.д.), React понимает что мы что-то обновили, и он обновляет реальный `DOM`
1. Эта процедура называеться - Reconciliation
	* [Official site - docs](https://reactjs.org/docs/reconciliation.html)


## Пример, что такое JSX

* `JSX` - это разширение для `js` и `html`
	* [Official site - docs](https://reactjs.org/docs/introducing-jsx.html)
* `JSX` создан для более удобной локации компонентов и шаблонов, все находиться в одном файле, и `js` и `html`
* Композиция компонентов - приложение состоит из маленьких кусочков, и все они должны быть переиспользуемыми
* `JSX` в итоге превращаеться в обычный `js`, а все теги `html` превращаються в классы, этим превращением занимаеться `Babel js`
* Также в место `JSX`, можно использовать **ECMAScript 5**