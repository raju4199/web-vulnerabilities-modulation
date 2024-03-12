import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h1>Web Vulnerabilities Modulation</h1>
      <div>
        <Link to="/sql-injection">
          <div>SQL Injection</div>
        </Link>
        <Link to="/cross-site-scripting">
          <div>Cross Site Scripting</div>
        </Link>
        <Link to="/command-execution">
          <div>Command Execution</div>
        </Link>
      </div>
    </div>
  )
}

export default Home