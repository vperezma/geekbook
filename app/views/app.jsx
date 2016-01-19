import React from 'react'
import { render } from 'react-dom'
import '~/app/assets/styles/app'
import {Router, Route, browserHistory} from 'react-router'
import login from './login'
import home from './index'

class App extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <div className='container'>
        Hello World
        { children }
      </div>
    )
  }
}

render((
    <Router history = {browserHistory}>
      <Route path="/" component={App}>
        <Route path="login" component={login}/>

      </Route>
    </Router>

    ), document.getElementById('react'));
