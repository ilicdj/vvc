import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import React, {useEffect, useState} from "react";
import axios from "axios";
import { FaRegStar } from "react-icons/fa6";
import {Link} from "react-router-dom";


const PetNajboljeOcenjenih = () => {
    const [topFive, setTopFive] = useState([]);
    useEffect(() => {
        const fetchTopFiveMovies = async () => {
            try{
                const res = await axios.get('http://127.0.0.1:5555/api/v1/filmovi/top-rated');
                setTopFive(res.data.data.filmovi)
            } catch {
                console.log('Fetching error');
            }
        }
        fetchTopFiveMovies();
    }, []);
    return (
        <>
            <Navbar/>
                <h1 className='text-6xl font-heading text-center pt-12'>Pet najbolje ocenjenih</h1>
                <div id="TopFive" className='px-4 mt-24'>
                    {
                        topFive.map(movie => (
                            <>
                                <div key={movie._id} style={{backgroundImage: `url(/images/images/${movie.images[1]})`}}
                                     className='top-five-wrapper relative flex items-center justify-center bg-cover lg:max-w-[1300px] mx-auto border-2 border-dark h-[50vh]'>
                                    <div className="absolute inset-0 bg-black opacity-65 grid-overlay">
                                        {
                                            [...Array(16)].map((_, index) => (
                                                <div key={index}></div>
                                            ))
                                        }
                                    </div>
                                    <h2 className='relative z-40 font-heading text-heading text-white dark:text-darkModeLight'>{movie.title}</h2>
                                </div>
                                <div className='flex justify-evenly items-center mt-6 mb-48'>
                                    <p className='font-heading text-heading flex items-center gap-2'>{String(movie.rating).length === 1 ? movie.rating + ".0" : movie.rating}<FaRegStar className='mb-3' /></p>
                                    <p className='font-heading text-heading'>{movie.director}</p>
                                    <Link to={`/filmovi/${movie.slug}`} className='font-heading text-heading hover:bg-red'>
                                        Pogledaj više
                                    </Link>
                                </div>
                            </>
                        ))
                    }
                </div>
            <Footer/>
        </>
    );
};

export default PetNajboljeOcenjenih;