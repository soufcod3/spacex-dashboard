// import './App.css
import './styles.scss'
import './fonts/forced-square.ttf'
import './fonts/despair-time.otf'
import './fonts/despair-time-straight.otf'

import { Navbar } from "./components/Navbar"
import { Dashboard } from './components/Dashboard'

function App() {(0)

  return <div className="app-container">
    <Dashboard/>
    <Navbar/>
  </div>
}

export default App
