import React, { Component } from 'react';
import Blah from './Blah.js'

import 'todomvc-common/base.css'
import 'todomvc-app-css/index.css'

class Header extends Component {
  constructor(props){
    super(props)
    this.state = {
        input: "",
    }

  }

  myFunc = (e) => {
    this.setState({input:e.target.value})

  }

  handleSubmit = (event) =>{
    this.props.addTodo(this.state.input)
    event.preventDefault();
    this.setState({ input: ""}) 
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <header className="header">
          <h1>ToDoList</h1>
          <input onChange={this.myFunc} className="new-todo" placeholder="What needs to be done?" value={this.state.input} autoFocus/>
        </header>
      </form>
    );
  }
}

export default Header;