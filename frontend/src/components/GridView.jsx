import React from 'react';
import SingleMovieGrid from "./SingleMovieGrid.jsx";

const GridView = ({movies}) => {
    return (
        <div id='GridMovies'
            className="cbr grid grid-cols-1 gap-5 px-4 py-4 mx-auto sm:grid-cols-2 md:grid-cols-3 md:max-w-128 2xl:grid-cols-5 dark:border-white">
            {
                movies.map(movie => <SingleMovieGrid key={movie._id} movie={movie}/>)
            }
        </div>
    );
};

export default GridView;