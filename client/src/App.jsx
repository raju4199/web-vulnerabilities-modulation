import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home.jsx'
import SQLInjection from './components/SQLInjection'
import CrossSiteScripting from './components/CrossSiteScripting'
import CommandExecution from './components/CommandExecution'

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sql-injection" element={<SQLInjection />} />
          <Route path="/cross-site-scripting" element={<CrossSiteScripting />} />
          <Route path="/command-execution" element={<CommandExecution />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App