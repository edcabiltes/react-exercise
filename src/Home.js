import { useState } from "react"

const Home = () => {
  const [name, setName] = useState('baste')
  const [age, setAge] = useState(8)

  const handleClick = () => {
    setName('makoy')
    setAge(4)
  }

  return (
    <div className="home">
        <h2>Homepage</h2>
        <p>{name} is {age} years old</p>
        <button onClick={handleClick}>Click me</button>
    </div>
  )
}

export default Home