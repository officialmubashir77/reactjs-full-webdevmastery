import React, { useState, useEffect } from 'react';
import movieData from './data'; // Adjust the path as needed

const Movie = ({ searchQuery }) => {
  const [filter, setFilter] = useState('All');
  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
    // Function to filter movies based on category and search query
    const filterMovies = () => {
      let movies = filter === 'All' ? movieData : movieData.filter(movie => movie.category === filter);
      if (searchQuery) {
        movies = movies.filter(movie => movie.title.toLowerCase().includes(searchQuery.toLowerCase()));
      }
      setFilteredMovies(movies);
    };

    filterMovies();
  }, [filter, searchQuery]);

  // Unique categories for filter buttons
  const categories = ['All', ...new Set(movieData.map(movie => movie.category))];

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        {/* Filter buttons */}
        <div className="mb-8">
          <div className="flex space-x-4 flex-wrap gap-1">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 border rounded-md ${filter === category ? 'bg-indigo-500 text-white' : 'bg-white text-gray-700'}`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Movie cards */}
        <div className="flex flex-wrap -m-4">
          {filteredMovies.map(movie => (
            <div key={movie.id} className="p-4 md:w-1/3 lg:w-1/4 sm:w-1/2">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={movie.backdrop_path}
                  alt={movie.title}
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    {movie.category}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    {movie.title}
                  </h1>
                  <p className="leading-relaxed mb-3">
                    Release Date: {new Date(movie.release_date).toLocaleDateString()}
                  </p>
                  <div className="flex items-center flex-wrap">
                    <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                      Learn More
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                    <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      <svg
                        className="w-4 h-4 mr-1"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                      1.2K
                    </span>
                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                      <svg
                        className="w-4 h-4 mr-1"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                      6
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Movie;
