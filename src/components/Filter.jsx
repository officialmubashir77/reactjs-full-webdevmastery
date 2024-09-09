import React, { useState } from 'react';

const Filter = () => {
    // Array of products with names and prices
    const products = [
        { id: 1, name: "Apple", price: 100 },
        { id: 2, name: "Banana", price: 200 },
        { id: 3, name: "Cherry", price: 300 },
        { id: 4, name: "Date", price: 400 },
        { id: 5, name: "Elderberry", price: 500 },
        { id: 6, name: "Fig", price: 600 },
        { id: 7, name: "Grape", price: 700 },
        { id: 8, name: "Honeydew", price: 800 },
        { id: 9, name: "Kiwi", price: 900 },
        { id: 10, name: "Lemon", price: 1000 }
    ];


    // State for search term
    const [searchTerm, setSearchTerm] = useState('');

    // Filter products based on minimum price and search term
    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()));

    return (
        <div>
            <h1 className='text-2xl my-5 text-green-600 underline'>Product Filter</h1>           
            {/* Input field for search term */}
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by name"
            />

            {/* Render filtered products */}
            <ul>
                {filteredProducts.map(product => (
                    <li key={product.id}>
                        <strong>{product.name}</strong>: ${product.price}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Filter;
