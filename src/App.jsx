import { Router } from './routes'

import 'bootswatch/dist/quartz/bootstrap.css'
import './custom.css'

import { BrowserRouter} from 'react-router-dom'
import { NavBar } from './components/NavBar'

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Router/>
    </BrowserRouter>
  )
}

export default App
