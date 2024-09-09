import React, { useEffect, useState } from 'react'

const LearnUseEffect = () => {
    // usestate counter
    const [counter, setCounter] = useState(0);

    // useEffect
    useEffect(() => {
        console.log('Useeffect is running !!!');
        document.title = `Counter: ${counter}`;
        
    }, [counter]); 
  return (
    <div>
        <h1>Learn useEffect Hook</h1>
        <p>Counter: {counter}</p>
        <button onClick={() => setCounter(counter + 1)} className='mx-5'>Increment</button>
        <button onClick={() => setCounter(counter - 1)} className='mx-5'>Decrement</button>
    </div>
  )
}

export default LearnUseEffect

