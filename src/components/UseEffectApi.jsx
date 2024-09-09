import React, { useEffect, useState } from 'react';

const UseEffectApi = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Fetch error:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
    <div className="container mx-auto p-6">
    <h1 className="text-3xl font-bold mb-4 text-gray-800">Posts</h1>
    <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
      {data.map(post => (
        <li key={post.id} className="h-64 p-4 border border-gray-300 rounded-lg shadow-md bg-white">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">{post.title}</h2>
          <p className="text-gray-700">{post.body}</p>
        </li>
      ))}
    </ul>
  </div>


  </>
  );
};

export default UseEffectApi;
