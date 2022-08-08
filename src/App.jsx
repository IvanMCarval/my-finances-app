import { Login } from './pages/Login'
import { Router } from './routes'

import 'bootswatch/dist/quartz/bootstrap.css'
import './custom.css'

import { BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Router/>
    </BrowserRouter>
  )
}

export default App
