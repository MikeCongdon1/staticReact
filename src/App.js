import React, { Component } from 'react'
import { Router, IndexRoute, hashHistory } from 'react-router'
import { Switch, Route, Link } from 'react-router-dom'
import InitialPage from './InitialPage'
import Register from './Register'
import Search from './Search'
import AppYes from './AppYes'

import './app.css'

class App extends Component {
  render () {
    return (
        <div>
        Start page
          <Header />
          <Main />
        </div>

    )
  }
}

export default App

class Main extends Component{
  render () {
    return (
  <main>
    <Switch>
      <Route exact path="/" component={AppYes} />
      <Route path="/register" component={Register} />
      
      <Route path="/search" component={Search} />
      <Route path="/initial" component={InitialPage} />
    </Switch>

  </main>
)
  }
}

class Header extends Component{
  render () {
    return (
  <header>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/register">register</Link></li>
        <li><Link to="/search">search</Link></li>
        <li><Link to="/initial">InitialPage</Link></li>
      </ul>
    </nav>
  </header>
)
}
}


/* <Router history={hashHistory}>
          <Route path="/" component={AppYes}>
            <IndexRoute component={InitialPage} />
            <Route path="register" component={Register} />
            <Route path="search" component={Search} />
          </Route>
        </Router> */

/*
class Register {
  render () {
    return (<div>Register page</div>)
  }
}
class Search {
  render () {
    return (<div>Search page</div>)
  }
}
class AppYes {
  render () {
    return (
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to React-Static</h1>
    </header>
    )
  }
}
*/
/* <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React-Static</h1>
        </header>
        <p className="App-intro">
          To get, edit <code>src/App.js</code> and save to reload. Keep it up!
        </p>
        {this.props.children}
        <Router history={hashHistory}>
          <Route path="/" component={Window}>
            <IndexRoute component={InitialPage} />
            <Route path="register" component={Register} />
            <Route path="search" component={Search} />
          </Route>
        </Router>
        <span>

          <a className="Nav" href="/register" > this</a>
          <a className="Nav" href="/money/that" > that</a>
          <a className="Nav" href="/money/other" > other</a>
          <a className="Nav" href="/money/mine" > mine</a>
          <a className="Nav" href="/money/yours" > yours</a>
        </span>
      </div>
      */
/*
        <div>
          <Nav>
            <NavItem>
              <NavLink href="#">Link</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Link</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Another Link</NavLink>
            </NavItem>
            <NavItem>
              <NavLink disabled href="#">Disabled Link</NavLink>
            </NavItem>
          </Nav>
        </div>
        */
