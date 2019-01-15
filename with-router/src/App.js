import React, { Component } from 'react'
import { Link } from '@reach/router'
import AppRouter from './router'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      aString: 'hello'
    }
  }
  render () {
    return (
      <div className='App'>
        <nav>
          <Link to='stuff'>Stuff</Link>
          <Link to='about'>About</Link>
        </nav>
        <AppRouter aString={this.state.aString} />
      </div>
    )
  }
}

export default App
