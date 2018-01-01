import React from 'react'

class InitialPage extends React.Component {
    render () {
      return (<div>InitialPage page        <div>{this.props.children}</div>
        </div>
    );
    }
  }
export default InitialPage