import React from 'react'
import ProjectItem from './ProjectItem'

class Projects extends React.Component {
  constructor () {
    super()
    
  }
  deleteProject(id) {
    console.log("in PR")
    this.props.onDelete(id);
  }
  render () {
    let projectItems
    if (this.props.projects) {
      projectItems = this.props.projects.map(project => (
        <ProjectItem onDelete={this.deleteProject.bind(this)} key={project.counter} project={project} />
      ))
    }
    return (
      <div className="Projects">
        {projectItems}
      </div>
    )
  }
}

export default Projects
/* <ul>

    {todos.map((todo => (<li key={todo.counter}>{todo.name}
  <button onClick={this.removeTodo.bind(null, todo.counter)}>Remove</button>
  <button onClick={this.details.bind(null, todo.counter)}>Details</button>
  </li>)))}
</ul> */
