import React, { Component } from 'react';
import { render } from 'react-dom';

class TodoList extends Component {
	constructor() {
		super();
		this.handleAddClick = this.handleAddClick.bind(this);
		this.handleDeleteClick = this.handleDeleteClick.bind(this);
		this.state = {
			todos: ['1', '2', '3']
		}
	}

	handleAddClick() {
		const todo = document.getElementsByName('todo')[0].value;
		if (todo !== '') {
			this.setState(prevState => ({
				todos: [...prevState.todos, todo]
			}));
			document.getElementsByName('todo')[0].value = '';
		} else {
			document.getElementsByName('todo')[0].placeholder = 'Please enter the text!';
		}
		
	}

	handleDeleteClick(e) {
		const d = e.target.name;
		const idx = this.state.todos.indexOf(d);
		const arr = this.state.todos;
		arr.splice(idx, 1);
		this.setState({
			todos: arr
		});
	}

	render() {
		const Todo = (props) => {
			return (
				<li className="todo">
					{props.todo}
					<button name={props.todo} onClick={this.handleDeleteClick}>+</button>
				</li>
			)
		}
		return (
			<div className="container">
				<h1>TODO-list</h1>
				<input type="text" name="todo" placeholder="Enter the text!"/>
				<button className="add" onClick={this.handleAddClick}>+</button>
				<ul className="todoList">
					{
						this.state.todos.map(todo => (
							<Todo todo={todo} />
						))
					}
				</ul>
			</div>
		)
	}
}


render(
	<TodoList />,
	document.getElementById('root')
);
