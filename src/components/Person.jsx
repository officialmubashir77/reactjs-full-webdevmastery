import React from 'react'

const Person = () => {
    // let myName = "Mubashir";
    // let age = 21;

    let myData = {
        name: "Mubashir",
        age: 21,
        description: "I'm a beginner in web development.",
        pincode: "123456"
    }
    
    // Destructuring object properties
    const { name, age, description, pincode } = myData;
    return (
        <>
            {/* <div>
                Web Development {myName}
                <p>
                    My Age is {myName} {age} years old.
                    I'm a beginner in web development.
                </p>
            </div> */}

            <div>
                <h1>Web Development {name}</h1>
                <p>
                    My Age is {age} years old.
                    {description}
                </p>
                <p>Pincode: {pincode}</p>
            </div>
        </>
    )
}

export default Person