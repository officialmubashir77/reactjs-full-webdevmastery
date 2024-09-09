import React, { useState } from 'react'

const Counter = () => {
    // useState
    const [count, setCount] = useState(0)

    //Array exapple in usestate
    const [numbers, setNumbers] = useState([1, 2, 3, 4, 5])

    // object example in use state
    const [person, setPerson] = useState({
        name: "John Doe",
        age: 30,
        city: "New York"
    })
  return (
    <div>
        <h1>Counter: {count}</h1>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        <button onClick={() => setCount(0)}>Reset</button>

        <h2>Numbers Array:</h2>
        {numbers.map((number , ind) => {
            return <div key={ind}>{number}</div>
        })}

        
    </div>
  )
}

export default Counter