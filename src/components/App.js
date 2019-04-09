import React, { Component } from 'react';
import Blah from './Blah.js'
import Header from './Header.js'
import Footer from './Footer.js'
import Main from './Main.js'

import 'todomvc-common/base.css'
import 'todomvc-app-css/index.css'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      todolist: [],
      filter: 0     //0 is all, 1 is active, 2 is completed
    }
  }

  addToDo = (name) => {

    let a = this.state.todolist
    let b = {
      name: name,
      isFinished: false,
    }
    a.push(b)
    this.setState({todolist: a})
    ;
  }

  // changeFilter = (index) => {
  //   let newFilter = this.state.todolist
  //   if(newFilter[index].isFinished == true)
  //   {
  //     newFilter[index].filter = 2;
  //   }
  //   else{
  //     newFilter[index].filter = 1;
  //   }
  //   this.setState({todolist: newFilter})
  //   return true
  // }

  toggleTodo = (index) => {
    let newList = this.state.todolist
    newList[index].isFinished = !newList[index].isFinished
    this.setState({todolist: newList })

    return true
  }

  render() {
    return (
      <div>
        <section className="todoapp">
          <Header addTodo={this.addToDo}/>
          {/* <!-- This section should be hidden by default and shown when there are todos --> */}
          <Main c={this.state.todolist} toggleTodo={this.toggleTodo} filter={this.state.filter}/>

          {/* <!-- This footer should hidden by default and shown when there are todos --> */}
          <Footer changeFilter={this.changeFilter} filter={this.state.filter}/>
        </section>
        
      </div>
    );
  }
}

export default App;
