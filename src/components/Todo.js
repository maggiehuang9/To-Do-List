import React from 'react';

class Todo extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      blah:"blah",
    }
  }
  
  getBlahStyle = () => {
    return {
      color: "red",
      fontSize: "18px",
    }
  }

 
  renderCheckbox =  () => {
    if(this.props.isFinished){
      return (
        <input onClick={()=>{this.props.toggleTodo(this.props.index)}} className="toggle" type="checkbox" checked/>
      )
    } 
    return (
      <input onClick={()=>{this.props.toggleTodo(this.props.index)}} className="toggle" type="checkbox"/>
    )
  }
 
  render() {
    console.log(this.props)
    if(this.props.filter == 1 && this.props.isFinished){
      return null;
    } else if(this.props.filter == 2 && !this.props.isFinished){
      return null;
    }

    return (
        <li className={(this.props.isFinished == true) ? "completed" : ""}>
            <div className="view">
              {this.renderCheckbox()}
              <label>{this.props.name}</label>
              <button className="destroy"></button>
              <span>
                {this.props.text}
              </span>
            </div>
            <input className="edit" defaultValue="Rule the web"/>
          </li>
    )
  }
}

export default Todo;