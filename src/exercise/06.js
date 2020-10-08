// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import React, {useState} from 'react'

function UsernameForm({onSubmitUsername}) {
  // const [error, setError] = useState(null)
  const [username, setUsername] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    onSubmitUsername(username)
  }

  function handleChange(event) {
    // console.log(`This is the state value: ${username}`)
    setUsername(event.target.value.toLowerCase())
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="inputUsername">Username:</label>
        <input
          type="text"
          value={username}
          onChange={handleChange}
          id="inputUsername"
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
