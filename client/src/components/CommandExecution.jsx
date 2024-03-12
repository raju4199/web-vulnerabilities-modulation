import { useState } from 'react'
import axios from '../utils/axios'

const CommandExecution = () => {
  const [command, setCommand] = useState('')
  const [response, setResponse] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post('/api/command-execution', { command })
      setResponse(res.data.message)
    } catch (err) {
      setResponse(err.response.data.message)
    }
  }

  return (
    <div>
      <h2>Command Execution</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter command"
          value={command}
          onChange={(e) => setCommand(e.target.value)}
        />
        <button type="submit">Execute</button>
      </form>
      <p>{response}</p>
    </div>
  )
}

export default CommandExecution