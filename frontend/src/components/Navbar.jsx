import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {MdClose} from "react-icons/md";
import { motion as m } from "framer-motion";
import { BiMenuAltLeft } from "react-icons/bi";
import {AiFillInstagram} from "react-icons/ai";
import {FaTiktok} from "react-icons/fa";
import { MdNightsStay } from "react-icons/md";



// Parent container variants
const containerVariants = {
    hidden: {
        opacity: 1
    },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2, // Stagger by 0.2 seconds
            delayChildren: 0.2,   // Delay children animations by 0.3 seconds
        }
    }
};

// Child element variants
const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.2 } }
};

const Navbar = () => {
    const [showBigMenu, setShowBigMenu] = useState(false);
    const [showModal, setShowModal] = useState(false);
    // eslint-disable-next-line no-unused-vars
    const [darkMode, setDarkMode] = useState(false);
    const handleModal = () => {
        setShowModal(!showModal);
    }
    const handleMenuHover = () => {
        setShowBigMenu(true);
    }

    const handleMenuLeave = () => {
        setShowBigMenu(false);
    }

    const handleDarkMode = () => {
        setDarkMode(prevMode => {
            const newMode = !prevMode;
            const body = document.querySelector('body');
            if (newMode) {
                body.classList.add('dark');
            } else {
                body.classList.remove('dark');
            }
            return newMode;
        });
    }

    return (
        <>
            <div className='fixed top-6 left-5 z-50 bg-white bg-blend-difference left-1 flex justify-between lg:hidden'>
                <m.button
                    onClick={() => handleModal()}
                    className='text-5xl font-heading rounded-2xl p-2'
                    whileTap={{scale: 0.90}}
                >
                    Menu
                </m.button>
            </div>
            {
                showModal ? <div id='Modal'
                                 className='fixed top-0 left-0 z-50 flex flex-col justify-center items-center gap-12 h-screen w-full bg-dark text-light'>
                    <MdClose className='absolute top-12 right-12 text-5xl cursor-pointer'
                             onClick={() => handleModal()}/>
                    <m.ul
                        initial="hidden"
                        whileInView="visible"
                        variants={containerVariants}
                        viewport={{once: true, amount: 0.2}}  // Trigger when 20% of the container is in view
                        className='flex-col justify-center items-center gap-12'>
                        <m.li variants={childVariants} className='mt-20 text-center'>
                            <Link to={`/`} className='font-heading text-3xl'>Početna</Link>
                        </m.li>
                        <m.li variants={childVariants} className='mt-20 text-center'>
                            <Link to={`/o-nama`} className='font-heading text-3xl'>O
                                nama</Link></m.li>
                        <m.li variants={childVariants} className='mt-20 text-center'>
                            <Link to={`/kontakt`} className='font-heading text-3xl'>Kontakt</Link>
                        </m.li>
                        <m.li variants={childVariants} className='mt-20 text-center'>
                            <Link to={`/filmovi`} className='font-heading text-3xl'>Filmovi</Link>
                        </m.li>
                        <m.li variants={childVariants} className='mt-20 text-center'>
                            <Link to={`/faq`} className='font-heading text-3xl'>Često postavljena pitanja</Link>
                        </m.li>
                    </m.ul>
                </div> : ''
            }
            <p className='fixed nav-div hero-grid top-6 left-5 text-6xl hidden lg:block'>
                <button onMouseEnter={handleMenuHover} onMouseLeave={handleMenuLeave}><BiMenuAltLeft/></button>
            </p>
            <button onClick={handleDarkMode} className='bg-blend-difference fixed nav-div hero-grid top-6 right-5 text-6xl hidden lg:block'>
                <MdNightsStay />
            </button>
            <m.div initial={{x: "-100%"}} animate={{x: showBigMenu ? 0 : "-100%"}}
                   transition={{duration: 0.3, ease: "easeInOut"}} onMouseEnter={handleMenuHover}
                   onMouseLeave={handleMenuLeave} className="nav-div fixed bg-dark text-light p-8 h-screen mx-auto dark:bg-darkModeLight dark:text-darkModeBlack">
                <nav
                    className='hidden flex-col items-center text-center justify-center py-8 px-4 lg:flex '>
                    <h2 className='text-heading font-heading py-8 md:py-0 md:border-t-0 flex justify-center items-center dark:border-darkModeLight'>Vintage
                        Video Club</h2>
                    <ul className='flex flex-col gap-5 border-2 border-light p-6 dark:border-darkModeBlack'>
                        <li className='font-heading text-heading'><Link to='/'>Početna</Link></li>
                        <li className='font-heading text-heading'><Link to='/o-nama'>O nama</Link></li>
                        <li className='font-heading text-heading'><Link to='/kontakt'>Kontakt</Link></li>
                        <li className='font-heading text-heading'><Link to='/filmovi'>Filmovi</Link></li>
                        <li className='font-heading text-heading'><Link to='/faq'>Često postavljena pitanja</Link></li>
                    </ul>
                </nav>
                <div className='flex gap-4 bg-light items-center justify-center mt-12 border-2 border-light py-8 dark:bg-darkModeBlack'>
                    <a className='text-heading text-dark dark:text-darkModeLight' href="#"><AiFillInstagram/></a>
                    <a className='text-heading text-dark dark:text-darkModeLight' href="#"><FaTiktok/></a>
                </div>
            </m.div>
        </>
    );
};

export default Navbar;