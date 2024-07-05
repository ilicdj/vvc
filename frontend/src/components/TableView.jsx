import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { FaPlay } from "react-icons/fa";
import { MdFileDownload } from "react-icons/md";
import { RiSortDesc, RiSortAsc } from "react-icons/ri";

const TableView = ({ movies }) => {
    const [sortedMovies, setSortedMovies] = useState(movies);

    const handleSortDescending = () => {
        const sorted = [...movies].sort((a, b) => b.rating - a.rating);
        setSortedMovies(sorted);
    };

    const handleSortAscending = () => {
        const sorted = [...movies].sort((a, b) => a.rating - b.rating);
        setSortedMovies(sorted);
    };

    return (
        <>
            <table className="min-w-full overflow-x-auto divide-y divide-gray-200 dark:text-darkModeLight dark:border-darkModeLight">
                <thead className="bg-gray-50 dark:bg-darkModeBlack dark:text-darkModeLight">
                <tr>
                    <th className="font-text px-6 py-3 text-left text-xs text-gray-500 uppercase tracking-wider dark:text-white dark:border-2 dark:border-darkModeLight">Naziv</th>
                    <th className="font-text px-6 py-3 text-left text-xs text-gray-500 uppercase tracking-wider dark:text-white dark:border-2 dark:border-darkModeLight">Reditelj</th>
                    <th className="font-text px-6 py-3 text-left text-xs text-gray-500 uppercase tracking-wider dark:text-white dark:border-2 dark:border-darkModeLight">Duzina</th>
                    <th className="font-text px-6 py-3 text-left text-xs text-gray-500 uppercase tracking-wider dark:text-white dark:border-2 dark:border-darkModeLight">
                        Ocena
                        <div className="mt-2">
                            <button
                                onClick={handleSortDescending}
                                className="mr-2 px-2 py-1 bg-dark text-xl rounded hover:bg-blue-700"
                            >
                                <RiSortDesc/>
                            </button>
                            <button
                                onClick={handleSortAscending}
                                className="px-2 py-1 bg-dark text-xl rounded hover:bg-blue-700"
                            >
                                <RiSortAsc/>
                            </button>
                        </div>
                    </th>
                    <th className="font-text px-6 py-3 text-left text-xs text-gray-500 uppercase tracking-wider dark:text-white dark:border-2 dark:border-darkModeLight">Akcije</th>
                </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 dark:bg-darkModeBlack">
                {sortedMovies.map((movie) => (
                    <tr key={movie._id} className="duration-150 hover:bg-dark group dark:border-2 dark:border-darkModeLight">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-headings group-hover:text-white text-table-movie-info">{movie.title}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-headings group-hover:text-white text-table-movie-info">{movie.director}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-headings group-hover:text-white text-table-movie-info">{movie.duration}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-headings group-hover:text-white text-table-movie-info">{movie.rating}</td>
                        <td className="flex items-center gap-2 px-6 py-4 whitespace-nowrap text-table-movie-info">
                            <Link to={movie.slug} className='text-dark duration-200 hover:text-light group-hover:text-white dark:text-darkModeLight'><FaPlay/></Link>
                            <a download href={`/images/${movie.image_path}`} className='border-2 border-dark text-dark rounded p-1 duration-200 dark:text-darkModeLight dark:border-darkModeLight group-hover:text-white group-hover:border-white'><MdFileDownload/></a>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    );
};

export default TableView;