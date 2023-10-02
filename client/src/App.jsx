import { useState } from 'react'
import axios from "axios"

function App() {
  const [count, setCount] = useState({})
  const handleOnchange = (e) => {
    setCount((prevCount) => ({
      ...prevCount,
      [e.target.name]: e.target.value,
    }));
  }
  console.log("count", count)
  const handleOnsubmit = async (e) => {
    e.preventDefault()
    // const res = {count.name, }
    await axios.post("http://localhost:3001/createuser", { name: count?.name, email: count?.email, age: count?.age })
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }
  return (
    <div>
      <form onSubmit={(e) => handleOnsubmit(e)}>
        <input type="text" name='name' onChange={(e) => handleOnchange(e)} />
        <input type="text" name='email' onChange={(e) => handleOnchange(e)} />
        <input type="number" name='age' onChange={(e) => handleOnchange(e)} />
        <button type='sumbit'>save</button>
      </form>
    </div>
  )
}

export default App
