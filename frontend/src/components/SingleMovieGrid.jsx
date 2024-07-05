import {Link} from "react-router-dom";
import {FaPlay} from "react-icons/fa";
import {MdFileDownload} from "react-icons/md";
import React from "react";

const SingleMovieGrid = ({ movie }) => {
    return (
        <div key={movie.title}
             className='csr flex flex-col items-center justify-center gap-4 pt-4 dark:border-white'>
            <img key={movie._id} src={`/images/${movie.image_path}`} alt={movie.title}/>
            <div className='flex flex-col items-center'>
                <h2 className='font-heading text-center text-3xl font-bold'>{movie.title}</h2>
                <h5 className='font-heading'>{movie.duration}min</h5>
            </div>
            <div className='flex items-center gap-12 border-dark border-t-2 w-full justify-center dark:border-darkModeLight'>
                <Link to={movie.slug} className='text-2xl text-dark rounded p-2 dark:text-white'><FaPlay/></Link>
                <a download href={`/images/${movie.image_path}`}
                   className='text-4xl text-dark rounded p-1 dark:text-white'><MdFileDownload/></a>
            </div>
        </div>
    );
};

export default SingleMovieGrid;