import React from 'react'

const Laptop = ({ model, processor, memory, storage }) => {

    //object styling INTERNAL
    const objectStyle = {
        background: 'yellow',
        padding: '20px',
        borderRadius: '8px',
        margin: '20px'
    }

    return (

        // Inline Styling
        // <div style={{ background: "Yellow", padding: "20px" , borderRadius : "8px" , margin : "20px" }}>

        <div className='externalObjStyle' style={objectStyle} >
            <h2>Laptop Model: {model}</h2>
            <p>Processor: {processor}</p>
            <p>Memory: {memory} GB</p>
            <p>Storage: {storage} TB</p>

        </div>
    )
}

export default Laptop