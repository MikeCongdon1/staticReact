import React from 'react'
import api from './API'
import {Component} from 'react'

class Register  extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      rovers: [],
      roverName: ''
    } 

  }
  componentWillMount(){
    
  }
  handleGet(idx){
    console.log("you did it")
    const fetchDataURL = 'http://127.0.0.1:4000/'
    api.getRovers().then((res) => {
      this.setState({
        rovers: res.rovers,
        roverName: res.rovers[0].name
      })
    })
  }
  render () {
    console.log("rovers: ", this.state.rovers)
    return (<div>Register page
      <button onClick={this.handleGet.bind(this)}>Fetch</button>
            
              Rover: {this.state.roverName}
             
    </div>)
  }
}
export default Register
