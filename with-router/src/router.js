import React from 'react'
import { Router } from '@reach/router'
import Stuff from './components/Stuff'
import About from './components/About'

const AppRouter = () => {
  return (
    <Router>
      <Stuff path='/stuff' />
      <About path='/about' />
    </Router>
  )
}

export default AppRouter
