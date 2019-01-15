import React, { Component } from 'react'
import About from './components/About'
import Stuff from './components/Stuff'
import './App.css'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showAbout: false,
      showStuff: false
    }
  }

  render () {
    const showAbout = () => {
      this.setState({
        showAbout: true,
        showStuff: false
      })
    }

    const showStuff = () => {
      this.setState({
        showAbout: false,
        showStuff: true
      })
    }

    return (
      <div className='App'>
        <nav>
          <button onClick={showAbout}>About</button>
          <button onClick={showStuff}>Stuff</button>
        </nav>
        {this.state.showAbout ? <About /> : null}
        {this.state.showStuff ? <Stuff /> : null}
      </div>
    )
  }
}

export default App
