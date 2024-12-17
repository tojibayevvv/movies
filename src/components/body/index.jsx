import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovies } from "../../redux/api/movie-api";
// import { useNavigate } from "react-router-dom";

const Body = () => {
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const { movies, status, error } = useSelector((state) => state.movies);
  const [expandedCategory, setExpandedCategory] = useState(null);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchMovies());
    }
  }, [dispatch, status]);

  if (status === "loading") {
    return <div>Loading movies...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  const categories = movies.reduce((acc, movie) => {
    if (!acc[movie.genre]) acc[movie.genre] = [];
    acc[movie.genre].push(movie);
    return acc;
  }, {});

  return (
    <div className="p-4">
      {Object.entries(categories).map(([genre, genreMovies]) => (
        <div key={genre} className="mb-8">
            <hr className="border-2 bg-gray-500 mb-4"/>
          <div className="flex justify-between items-center mb-5">
            <h2 className="text-xl font-bold capitalize">{genre}</h2> 
            <button
              className="text-blue-500 capitalize text-2xl"  // Capitalized button text
              onClick={() => setExpandedCategory(genre)}
            >
              See All
            </button>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {(expandedCategory === genre ? genreMovies : genreMovies.slice(0, 4)).map((movie) => (
              <div key={movie.id} className="bg-gray-100 p-2 rounded">
                <img
                  src={movie.image}
                  alt={movie.title}
                  className="w-full h-[500px] object-cover rounded"
                />
                <h3 className="mt-2 text-sm font-semibold capitalize">{movie.title}</h3> 
              </div>
            ))}
          </div>
          {expandedCategory === genre && (
            <button
              className="mt-4 text-blue-500 capitalize"  // Capitalized button text
              onClick={() => setExpandedCategory(null)}
            >
              Show Less
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default Body;
