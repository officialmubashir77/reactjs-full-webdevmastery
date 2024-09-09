import React from 'react'

const Product = ({ title, brand, price }) => {

    // array list make and send as a props 
    
    const product = {
        title: "Iphone",
        model: "I phone - 15",
        price: 100000
    }

    return (
        <>
            {/* <div>
                <h1>Product Title : {product.title}</h1>
                <h2>Product Model : {product.model}</h2>
                <p>Product Price : {product.price}</p>
            </div> */}

            {/* //props data */}
            <h1>Product Title : {title}</h1>
            <h2>Product Model : {brand}</h2>
            <p>Product Price : {price}</p>
        </>
    )
}

export default Product