import { useState } from 'react'
import axios from '../utils/axios'

const SQLInjection = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [response, setResponse] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post('/api/sql-injection/login', { username, password })
      setResponse(res.data.message)
    } catch (err) {
      setResponse(err.response.data.message)
    }
  }

  return (
    <div>
      <h2>SQL Injection</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      <p>{response}</p>
    </div>
  )
}

export default SQLInjection