import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/sql-injection">SQL Injection</Link>
        </li>
        <li>
          <Link to="/cross-site-scripting">Cross Site Scripting</Link>
        </li>
        <li>
          <Link to="/command-execution">Command Execution</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar