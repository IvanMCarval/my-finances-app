import Router from './routes'
import ProvedorAutenticacao from './ProvedorAutenticacao'

import 'toastr/build/toastr.min.js'

import 'bootswatch/dist/quartz/bootstrap.css'
import './custom.css'
import 'toastr/build/toastr.css'

import 'primereact/resources/themes/lara-light-indigo/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'

import NavBar from './components/NavBar'
import React from 'react'

class App extends React.Component {
  render() {
    return (
      <ProvedorAutenticacao>
        <div>
          <NavBar />
          <Router />
        </div>
      </ProvedorAutenticacao>
    )
  }
}

export default App
