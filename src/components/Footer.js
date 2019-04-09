import React, { Component } from 'react';
import Blah from './Blah.js'

import 'todomvc-common/base.css'
import 'todomvc-app-css/index.css'

class App extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <footer className="footer">
        {/* <!-- This should be `0 items left` by default --> */}
        <span className="todo-count"><strong>0</strong> item left</span>
        {/* <!-- Remove this if you don't implement routing --> */}
        <ul className="filters">
          {/* <li>
            <a className={this.props.filter === 0 ? "selected" : ""} href="#/" onClick={()=>{this.props.changeFilter(0)}}>All</a>
          </li>
          <li>
            <a className={this.props.filter === 1 ? "selected" : ""} href="#/active" onClick={()=>{this.props.changeFilter(1)}}>Active</a>
          </li>
          <li>
            <a className={this.props.filter === 2 ? "selected" : ""} href="#/completed" onClick={()=>{this.props.changeFilter(2)}}>Completed</a>
          </li> */}
        </ul>
        {/* <!-- Hidden if no completed items are left ↓ --> */}
        {/* <button className="clear-completed">Clear completed</button> */}
      </footer>
    );
  }
}

export default App;