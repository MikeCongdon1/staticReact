import React from 'react'
import Projects from './Components/Projects'
import AddProject from './Components/AddProject'

class Search extends React.Component {
  constructor () {
    super()
    this.addTodo = this.addTodo.bind(this)
    this.removeTodo = this.removeTodo.bind(this)
    this.details = this.details.bind(this)
    this.state = {
      todos: [],
      title: 'React simple todo',
      counter: 0,
    }
  }
  removeTodo (index) {
    const todos = this.state.todos
    const todo = todos.findIndex(todo => todo.counter === index)
    console.log(todo)
    todos.splice(todo, 1)
    this.setState({ todos })
  }
  addTodo (event) {
    event.preventDefault()
    const name = this.refs.name.value
    const completed = this.refs.completed.value
    let counter = this.state.counter
    const todos = this.state.todos

    const todo = {
      title,
      category,
      counter,
    }
    counter += 1

    todos.push(todo)

    this.setState({
      todos,
      counter,
    })
    this.refs.todoForm.reset()
  }
  handleAddProject (project) {
    console.log(project)
    const projects = this.state.todos
    projects.push(project)
    this.setState({ todos:projects })
  }
  details (index) {
    const todos = this.state.todos
    const todo = todos.findIndex(todo => todo.counter === index)
    console.log('you are clicking{}', todo)

  }
  render () {
    const title = this.state.title
    const todos = this.state.todos
    return (<div className="App">Search page
      <h1>{title}</h1>
      <AddProject addProject={this.handleAddProject.bind(this)} />

      <Projects projects={todos} />


    </div>)
  }

}

export default Search
/*
      <pre>
        {JSON.stringify(todos)}
      </pre>
*/
