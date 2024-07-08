import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import axios from "axios";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';
import { EffectFade, Autoplay } from 'swiper/modules';
import {MdClose} from "react-icons/md";
import {FaPlay} from "react-icons/fa";

const Film = () => {
    const [showWatchMovieModal, setShowWatchMovieModal] = useState(false);
    const [movie, setMovie] = useState('');
    const { slug } = useParams();

    useEffect(() => {
        axios.get(`http://127.0.0.1:5555/api/v1/filmovi/${slug}`)
            .then(res => setMovie(res.data.data.film))
            .catch(err => console.log(err))
    }, []);

    if(!movie) {
        return (
            <>
                <Navbar />
                <div className="cbr py-12 mt-4 mx-auto md:max-w-128">
                    <h1>Loading...</h1>
                </div>
                <Footer />
            </>
        );
    }
    const handleModal = () => {
        setShowWatchMovieModal(!showWatchMovieModal);
    }
    return (
        <>
            <Navbar/>
            <h1 className='font-heading text-6xl text-center py-12 md:text-big-headings'>{movie.title}</h1>
            {
                showWatchMovieModal ? (
                    <div id='WatchMovieModal'
                        className='fixed flex items-center justify-center bg-blue z-40 h-[80vh] w-[80%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                        <FaPlay className='text-heading cursor-wait z-40' />
                        <MdClose onClick={handleModal} className='absolute z-40 top-12 right-12 text-5xl cursor-pointer'/>
                        <div className='absolute w-full h-full grid grid-cols-5 items-center text-center justify-center'>
                            {Array.from({ length: 65 }, (_, index) => (
                                <p key={index} className='text-light text-2xl font-heading opacity-50'>{movie.title}</p>
                            ))}
                        </div>
                    </div>
                ) : ''
            }
            <div className="mt-4 mx-auto">
                <Swiper
                    id='SwiperSingleMovie'
                    spaceBetween={30}
                    effect="fade"
                    autoplay={{
                        delay: 3500,
                        disableOnInteraction: false,
                    }}
                    preventInteractionOnTransition={true}
                    modules={[EffectFade, Autoplay]}
                    className="w-full h-[80vh]"
                >
                    {movie.images.map((image, index) => (
                        <SwiperSlide key={index}>
                            <div
                                className="relative cbr w-[90%] mx-auto h-[80vh] bg-cover bg-center"
                                style={{backgroundImage: `url(/images/images/${image})`}}
                            >
                                <div className="absolute cbr inset-0 bg-black opacity-65 grid-overlay">
                                    {
                                        [...Array(16)].map((_, index) => (
                                            <div key={index}></div>
                                        ))
                                    }
                                </div>
                                <div
                                    className='relative z-10 flex flex-col justify-around gap-12 mt-8 lg:mt-16 lg:flex-col'>
                                    <div className='flex flex-col items-center justify-center mt-80 gap-8'>
                                        <button
                                            onClick={handleModal}
                                            className='custom-btn py-4 px-12 font-heading text-3xl bg-light border-2 duration-200 hover:bg-light hover:text-dark dark:text-darkModeBlack'>Gledaj
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <p className='font-text md:text-2xl px-12 py-12 max-w-[1400px] mx-auto md:px-24'>{movie.description}</p>
                <div className='movie-info border-dark max-w-5xl mx-auto px-4 md:px-0 md:border-2'>
                    <div className='flex justify-between items-center'>
                        <p className='movie-info-headline font-heading sm:text-3xl border-dark border-2 w-full text-center py-6 dark:hover:text-darkModeBlack dark:border-darkModeLight'>Naziv</p>
                        <p className='movie-info-data font-heading sm:text-3xl border-dark border-2 w-full text-center py-6 dark:border-darkModeLight'>{movie.title}</p>
                    </div>
                    <div className='flex justify-between items-center'>
                        <p className='movie-info-headline font-heading sm:text-3xl border-dark border-2 w-full text-center py-6 dark:border-darkModeLight'>Reditelj</p>
                        <p className='movie-info-data font-heading sm:text-3xl border-dark border-2 w-full text-center py-6 dark:hover:text-darkModeBlack dark:border-darkModeLight'>{movie.director}</p>
                    </div>
                    <div className='flex justify-between items-center'>
                        <p className='movie-info-headline font-heading sm:text-3xl border-dark border-2 w-full text-center py-6 dark:hover:text-darkModeBlack dark:border-darkModeLight'>Premijera</p>
                        <p className='movie-info-data font-heading sm:text-3xl border-dark border-2 w-full text-center py-6 dark:border-darkModeLight'>{movie.release_date.split('-').reverse().join('.')}</p>
                        {/*<p className='font-heading sm:text-3xl border-dark border-2 w-full text-center py-6'>{formattedDate}</p>*/}
                    </div>
                    <div className='flex justify-between items-center'>
                        <p className='movie-info-headline font-heading sm:text-3xl border-dark border-2 w-full text-center py-6 dark:border-darkModeLight'>Ocena</p>
                        <p className='movie-info-data font-heading sm:text-3xl border-dark border-2 w-full text-center py-6 dark:hover:text-darkModeBlack dark:border-darkModeLight'>{movie.rating}</p>
                    </div>
                    <div className='flex justify-between items-center'>
                        <p className='movie-info-headline font-heading sm:text-3xl border-dark border-2 w-full text-center py-6 dark:hover:text-darkModeBlack dark:border-darkModeLight'>Trajanje</p>
                        <p className='movie-info-data font-heading sm:text-3xl border-dark border-2 w-full text-center py-6 dark:border-darkModeLight'>{movie.duration}</p>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default Film;