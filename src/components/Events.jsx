import React from 'react'

const Events = () => {
    const handleClick = () => {
        alert('This is an alert message!')
    }

    const addition = (num1 , num2) => {
        alert(`The sum of ${num1} and ${num2} is ${num1 + num2}`)
    }
  return (
    <div>
        <h1>Events</h1>
        <button onClick={handleClick}>Click Me</button>

        <button onClick={() => addition(20 , 10)}>button 2 </button>
    </div>
  )
}

export default Events