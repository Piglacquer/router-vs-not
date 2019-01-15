import React, { Component } from 'react'
import { Link } from '@reach/router'
import AppRouter from './router'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <nav>
          <Link to='/about'>About</Link>
          <Link to='/stuff'>Stuff</Link>
        </nav>
        <AppRouter />
      </div>
    )
  }
}

export default App
