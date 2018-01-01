import React from 'react'


class ProjectItem extends React.Component {
  removeTodo(idx){
    console.log("thisDelete")
    console.log(this.props.project)
    this.props.onDelete(idx)

  }
  details(){
    console.log("hihihi")
  }
  render() {
    return(
      <li className="Project">
        <strong>{this.props.project.title}</strong> - {this.props.project.category}   
        <button onClick={this.removeTodo.bind(this, this.props.project.counter)}>Remove</button>
        <button onClick={this.details.bind(null, this.props.project.counter)}>Details</button>
      </li>
    )
  }
}

export default ProjectItem;