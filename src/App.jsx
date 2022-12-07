import Router from './routes'

import 'bootswatch/dist/quartz/bootstrap.css'
import './custom.css'

import NavBar from './components/NavBar'
import React from 'react'

class App extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <Router />
      </div>
    )
  }
}

export default App
