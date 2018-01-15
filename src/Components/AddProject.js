import React from 'react'


class AddProject extends React.Component {
  constructor ()
  {
    super()
    
    this.state = {
      newProject: {},
    }
  }
  handleSubmit (e) {
    if (this.refs.name.value === '') {
      alert('Title required')
    } else {
      this.setState({ newProject: {
        title: this.refs.name.value,
        category: this.refs.category.value,
        Status: this.refs.completed.value
      }}, function(){
          this.props.addProject(this.state.newProject)
      })
    }
    e.preventDefault()
  }
  render () {
    const defaultProps = {
        categories: ['Web Design', 'Web Dev', 'Mobile Dev'],
      }
    const categoryOptions = defaultProps.categories.map(category => <option key={category} value={category}>{category}</option>)

    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)} ref="todoForm">
          <input type="text" ref="name" placeholder="what needs" />
          <select ref="category">
            {categoryOptions}
          </select>
          <input type="text" ref="completed" placeholder="is done" />
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default AddProject
/* <ul>

    {todos.map((todo => (<li key={todo.counter}>{todo.name}
  <button onClick={this.removeTodo.bind(null, todo.counter)}>Remove</button>
  <button onClick={this.details.bind(null, todo.counter)}>Details</button>
  </li>)))}
</ul> */
