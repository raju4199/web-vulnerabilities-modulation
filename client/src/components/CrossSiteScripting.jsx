import { useState } from 'react'
import axios from '../utils/axios'

const CrossSiteScripting = () => {
  const [message, setMessage] = useState('')
  const [response, setResponse] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post('/api/cross-site-scripting/message', { message })
      setResponse(res.data.message)
    } catch (err) {
      setResponse(err.response.data.message)
    }
  }

  return (
    <div>
      <h2>Cross Site Scripting</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <p dangerouslySetInnerHTML={{ __html: response }}></p>
    </div>
  )
}

export default CrossSiteScripting