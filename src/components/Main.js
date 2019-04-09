import React, { Component } from 'react';
import Todo from './Todo.js'

import 'todomvc-common/base.css'
import 'todomvc-app-css/index.css'

class Main extends Component {
  constructor(props){
    super(props)
  }

  render() {
    let b = this.props.c.map( (val, index) => {
      return (
        <Todo
          name={val.name}
          isFinished={val.isFinished}
          toggleTodo={this.props.toggleTodo}
          index={index}
          filter={this.props.filter}
        />
      )
    })
    return (
      <section className="main">
        <input id="toggle-all" className="toggle-all" type="checkbox"/>
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul className="todo-list">
          {/* <!-- These are here just to show the structure of the list items -->
          <!-- List items should get the className `editing` when editing and `completed` when marked as completed --> */}
          {b}

          {/* <li className="completed">
            <div className="view">
              <input className="toggle" type="checkbox" defaultChecked/>
              <label>Taste JavaScript</label>
              <button className="destroy"></button>
            </div>
            <input className="edit" defaultValue="Create a TodoMVC template"/>
          </li>
          <li>
            <div className="view">
              <input className="toggle" type="checkbox"/>
              <label>Buy a unicorn</label>
              <button className="destroy"></button>
            </div>
            <input className="edit" defaultValue="Rule the web"/>
          </li> */}
        </ul>
      </section>
    );
  }
}

export default Main;