import React from 'react'


class ProjectItem extends React.Component {
    removeTodo(){
        console.log("hihihi")
    }
    details(){
        console.log("hihihi")
    }
    render() {
        return(
            <li className="Project">
                <strong>{this.props.project.name}</strong> - {this.props.project.completed}   
                <button onClick={this.removeTodo.bind(null, this.props.project.counter)}>Remove</button>
                <button onClick={this.details.bind(null, this.props.project.counter)}>Details</button>
            </li>
        )
    }
}

export default ProjectItem;