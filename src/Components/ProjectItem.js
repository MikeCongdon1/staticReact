import React from 'react'
import api from '../API'

class ProjectItem extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      fromServer: [],
      roverName: '',
    }
  }
  removeTodo (idx) {
    console.log('thisDelete')
    console.log(this.props.project)
    this.props.onDelete(idx)
  }
  details (idx) {
    console.log('hihihi')
  }

  handleFetch (idx) {
    const myImage = document.querySelector('div')
    // const fetchDataURL = 'http://127.0.0.1:4000/'
    api.getLocal().then(res => {
      console.log(res)
      this.setState({roverName: res.Items[1].Name,
        fromServer: res.Items
       })
    })
    /*
    api.getTodo().then(res => {
      console.log(res)
      this.setState({roverName: res.Todos[1].Name,
        fromServer: res.Todos
       })
    })
    /*
    api.getRovers().then((res) => {
      this.setState({
        fromServer: res.rovers,
        roverName: res.rovers[0].name
      })
    }) */

  }
  render () {
    console.log(this.state.roverName)
    return (
      <li className="Project">
        <strong>{this.props.project.title}</strong> - {this.props.project.category} - {this.props.project.Status}
        <button onClick={this.removeTodo.bind(this, this.props.project.counter)}>Remove</button>
        <button onClick={this.details.bind(null, this.props.project.counter)}>Details</button>
        <button onClick={this.handleFetch.bind(this, this.props.project.counter)}>Fetch</button>
        <div>
          {this.state.roverName}
          {this.state.fromServer.map((item, keyI) => (
            <p key={keyI}> rov: {item.Name} took {item.Totalphotos} while on mission</p>
          ))}
        </div>
      </li>

    )
  }
}

export default ProjectItem
