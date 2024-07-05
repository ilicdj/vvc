import {useState,useEffect} from 'react';
import Navbar from "../components/Navbar.jsx";
import axios from "axios";
import {Link} from "react-router-dom";
import Footer from "../components/Footer.jsx";
import {motion as m} from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {Autoplay, EffectCoverflow, Navigation, Pagination} from 'swiper/modules';
import { AiFillInstagram } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";


const visibleParagraphVariants = {
    visible:{ opacity: 1, y:0, transition:{duration: 0.4}},
    hidden:{ opacity: 0, y: 40 }
}

const Home = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:5555/api/v1/filmovi/last-15').then(res => setMovies(res.data.data.filmovi)).catch(err => console.log(err))
    }, []);

    return (
        <>
            <Navbar/>
            <div>
                <div className="hero-layout h-[100vh]">
                    <button className='item item-1 border-2 border-dark dark:border-darkModeLight'>
                        <h1 className='font-heading text-4xl md:text-6xl lg:text-8xl lg:max-w-3xl'>Dobrodošli.</h1>
                    </button>
                    <Link to='/filmovi' className='item item-3 border-2 border-dark dark:border-darkModeLight dark:hover:text-darkModeBlack'>
                        <h1 className='font-heading text-4xl md:text-6xl lg:text-8xl lg:max-w-3xl dark:hover:text-darkModeBlack hero-grid'>Gledaj odmah</h1>
                    </Link>
                    <div className='item item-2 gap-12 cursor-pointer border-2 border-dark dark:border-darkModeLight'>
                        <a className='text-7xl' href="#"><AiFillInstagram/></a>
                        <a className='text-7xl' href="#"><FaTiktok/></a>
                    </div>
                    <Link to='/pet-najbolje-ocenjenih' className='item item-4 border-2 border-dark dark:border-darkModeLight'>
                            <h1 className='font-heading text-4xl md:text-6xl lg:text-8xl lg:max-w-3xl hero-grid-contain'>5 najbolje ocenjenih</h1>
                    </Link>
                </div>
            </div>
            <section id="BestRatedMovies" className='-z-50'>
                <Swiper
                    id='HomeSwiper'
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    // loop={true}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    autoplay={{
                        disableOnInteraction: false,
                        delay: 10000,
                    }}
                    pagination={{clickable: true, bulletClass: 'swiper-pagination-bullet square-bullet'}}
                    navigation={true}
                    modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
                    className="w-full h-[70vh] hero-grid custom-swiper"
                >
                    {movies.map((movie, index) => (
                        <SwiperSlide key={index} className="w-3/4">
                                <div
                                    className="relative z-40 w-full h-full bg-cover bg-center rounded-lg overflow-hidden shadow-lg"
                                    style={{backgroundImage: `url(/images/images/${movie.images[1]})`}}
                                >
                                    <div className="absolute w-full h-full bottom-0 right-0 bg-dark opacity-65 grid-overlay">
                                            {[...Array(16)].map((_, index) => (
                                                <div className='relative z-50' key={index} data-grid-item={index + 1}>
                                                    <Link to={`/filmovi/${movie.slug}`} className="font-heading flex items-center justify-center cursor-pointer text-2xl h-full dark:text-black">
                                                        {movie.title}
                                                    </Link>
                                                </div>
                                            ))}
                                    </div>
                                </div>

                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>
            <section className='px-4 pt-48 pb-12' id="OnamaUvod">
                <div className="flex flex-col items-center mx-auto md:max-w-128">
                    <div className='relative'>
                        <m.p
                            initial='hidden'
                            whileInView='visible'
                            variants={visibleParagraphVariants}
                            viewport={{once: true, amount: 0.7}}
                            className='text-2xl leading-7 md:leading-10 font-text text-center mt-12 px-12 max-w-5xl md:px-24 lg:px-48'>Vintage
                            Video Club, simbol nostalgičnog doba, otvara svoja vrata kao pravo utočište za filmofile
                            širom
                            sveta. Ovaj klub je više od obične platforme za gledanje filmova; to je <span className='highlighted-word'>
                                putovanje kroz vreme
                                <div className='red-highlight'></div>
                            </span>
                            koje omogućava ljubiteljima filma da istraže dubine filmske kulture na potpuno novi način.
                            Tokom
                            proteklih decenija, Vintage Video Club je s ponosom svedočio evoluciji tehnologije, od
                            pionirskih dana videokaseta do ere DVD-ova, i konačno, do digitalnih platformi.
                        </m.p>
                        <div className='absolute -top-14 lg:top-0 lg:-left-5'>
                            <svg className='h-[100px] md:h-auto' xmlns="http://www.w3.org/2000/svg" version="1.0" width="107.000000pt"
                                 height="115.000000pt" viewBox="0 0 107.000000 115.000000"
                                 preserveAspectRatio="xMidYMid meet">

                                <g className="stroke-black dark:stroke-white" strokeWidth="10" transform="translate(0.000000,115.000000) scale(0.100000,-0.100000)" fill="#000000"
                                   stroke="none">
                                    <path
                                        className="fill-black dark:fill-white"
                                        d="M375 1136 c-85 -21 -143 -53 -206 -112 -70 -68 -109 -131 -141 -234 -34 -111 -32 -283 5 -395 50 -151 142 -259 272 -321 175 -83 353 -86 507 -8 67 34 158 121 192 183 153 282 23 707 -257 840 -119 57 -261 74 -372 47z m230 -11 c242 -51 408 -240 446 -508 56 -387 -229 -661 -606 -582 -273 58 -452 311 -431 611 24 341 276 545 591 479z"/>
                                    <path
                                        className="fill-black dark:fill-white"
                                        d="M386 718 c-49 -84 -99 -168 -110 -187 -11 -19 -15 -32 -9 -28 5 4 48 71 93 149 46 79 89 152 97 163 11 16 13 -34 13 -312 l0 -332 -77 -4 c-43 -1 -4 -3 87 -3 91 0 128 2 83 3 l-83 4 -2 350 -3 351 -89 -154z"/>
                                </g>
                            </svg>
                        </div>
                    </div>
                    <div className='relative mt-12 lg:mt-0'>
                        <m.p
                            initial='hidden'
                            whileInView='visible'
                            variants={visibleParagraphVariants}
                            viewport={{once: true, amount: 0.7}}
                            className='text-2xl leading-7 md:leading-10 font-text text-center mt-12 px-12 max-w-5xl md:px-24 lg:px-48'>Koraci
                            koje je ovaj klub preduzeo u prilagođavanju novim tehnologijama nisu bili samo koraci ka
                            promeni, već su bili koraci <span className='highlighted-word'>
                                ka očuvanju
                                <div className='green-highlight'></div>
                            </span> istinskog duha filmske baštine. Sa svakom novom
                            fazom
                            razvoja, Vintage Video Club je nastojao da očuva autentičnost filmskog iskustva, nudeći svojim
                            članovima pristup širokom spektru klasika i skrivenih dragulja koji su definisali filmsku
                            industriju kroz decenije.
                        </m.p>
                        <div className='absolute -top-8 right-0 lg:top-0 lg:-right-0'>
                            {/*Drugi SVG*/}
                            <svg className="h-[100px] md:h-auto" xmlns="http://www.w3.org/2000/svg" version="1.0"
                                 width="100.000000pt"
                                 height="120.000000pt" viewBox="0 0 100.000000 120.000000"
                                 preserveAspectRatio="xMidYMid meet">

                                <g transform="translate(0.000000,120.000000) scale(0.100000,-0.100000)"
                                   className="stroke-black dark:stroke-white" strokeWidth="10">
                                    <path
                                        className="fill-black dark:fill-white"
                                        d="M380 1184 c-154 -42 -304 -220 -357 -424 -23 -92 -21 -262 6 -363 43 -164 143 -302 257 -354 265 -121 628 117 700 458 59 280 -150 610 -431 684 -72 18 -103 18 -175 -1z m218 -25 c166 -57 335 -255 372 -436 19 -88 8 -245 -20 -313 -71 -168 -209 -305 -365 -362 -43 -15 -84 -22 -145 -22 -74 -1 -93 3 -148 28 -165 76 -272 287 -272 535 0 127 18 209 66 305 122 243 303 337 512 265z"/>
                                    <path
                                        className="fill-black dark:fill-white"
                                        d="M385 946 c-74 -32 -137 -117 -149 -202 -5 -31 -2 -26 14 21 44 135 168 217 259 171 34 -18 99 -88 111 -122 24 -62 17 -74 -177 -332 -102 -136 -190 -253 -196 -259 -7 -10 33 -13 194 -11 l204 3 -193 2 -193 3 172 227 c94 125 180 240 190 257 37 61 14 143 -57 205 -59 53 -117 64 -179 37z"/>
                                </g>
                            </svg>
                        </div>
                    </div>
                    <div className='relative mt-12 lg:mt-0'>
                        <m.p
                            initial='hidden'
                            whileInView='visible'
                            variants={visibleParagraphVariants}
                            viewport={{once: true, amount: 0.7}}
                            className='text-2xl leading-7 md:leading-10 font-text text-center mt-12 px-12 max-w-5xl md:px-24 lg:px-48'>Ova
                            nova era, u kojoj Vintage Video Club lansira svoju sopstvenu striming platformu, označava
                            sledeći korak u evoluciji ovog legendarnog kluba. Sada filmofili širom sveta <span
                                className='highlighted-word'>
                                imaju pristup
                                <div className='blue-highlight'></div>
                            </span>
                            biblioteci bez premca, koja seže od zlatnog doba Hollywooda do savremenih nezavisnih
                            remek-dela.
                            Sa intuitivnim korisničkim interfejsom i personalizovanim preporukama, Vintage Video Club
                            nije
                            samo platforma za gledanje filmova, već je interaktivno iskustvo koje se prilagođava ukusima
                            i
                            interesovanjima svakog pojedinca.
                        </m.p>
                        <div className='absolute -top-14 lg:top-0 lg:-left-5'>
                            <svg className='h-[100px] md:h-auto' xmlns="http://www.w3.org/2000/svg" version="1.0" width="109.000000pt"
                                 height="113.000000pt" viewBox="0 0 109.000000 113.000000"
                                 preserveAspectRatio="xMidYMid meet">

                                <g className="stroke-black dark:stroke-white" strokeWidth="10" transform="translate(0.000000,113.000000) scale(0.100000,-0.100000)" fill="#000000"
                                   stroke="none">
                                    <path
                                        className="fill-black dark:fill-white"
                                        d="M480 1114 c-123 -32 -253 -115 -335 -214 -46 -54 -99 -163 -120 -245 -19 -74 -19 -223 0 -294 58 -219 231 -351 460 -351 135 0 262 42 372 123 152 113 227 270 226 472 0 115 -29 221 -82 304 -40 61 -125 142 -179 170 -98 50 -233 64 -342 35z m222 -5 c167 -36 306 -175 353 -354 19 -76 19 -234 0 -309 -51 -197 -213 -353 -421 -406 -339 -87 -614 122 -614 465 1 234 123 437 328 543 125 65 240 85 354 61z"/>
                                    <path
                                        className="fill-black dark:fill-white"
                                        d="M515 859 c134 -23 165 -31 197 -52 87 -59 28 -155 -177 -289 l-89 -58 69 0 c174 0 335 -37 335 -76 0 -42 -168 -145 -344 -210 -27 -10 -44 -20 -39 -21 17 -6 254 100 314 140 63 42 89 79 73 105 -25 41 -154 72 -302 72 l-66 0 83 56 c153 106 215 185 191 245 -7 15 -22 35 -34 43 -36 23 -120 44 -198 50 l-73 5 60 -10z"/>
                                </g>
                            </svg>
                        </div>
                    </div>
                </div>
            </section>
            <section className='px-4'>
                <div className="flex flex-col items-center">
                    <Link to='/filmovi' className='font-heading text-heading py-4 px-8 rounded-2xl mb-8'>
                        <span className='highlighted-heading'>
                            Pregled svih filmova
                            <div className='red-highlight-heading'></div>
                        </span>
                    </Link>
                </div>
            </section>
            <Footer/>
        </>
    );
};

export default Home;