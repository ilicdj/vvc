import {useState} from 'react';
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import { CiCirclePlus, CiCircleMinus  } from "react-icons/ci";
import {motion as m} from "framer-motion";

const faqs = [
    {
        title: "Kako mogu pristupiti Vintage Video Club platformi?",
        text: "Pristup Vintage Video Club platformi je jednostavan! Samo posetite našu web stranicu putem svog internet pregledača."
    },
    {
        title: "Da li postoji mogućnost preuzimanja filmova za gledanje offline?",
        text: "Da, naša platforma omogućava članovima da preuzmu odabrane filmove za gledanje offline. To vam omogućava da uživate u svojim omiljenim filmovima čak i kada nemate pristup internetu."
    },
    {
        title: "Koliko košta članstvo na Vintage Video Club platformi?",
        text: "Nudeći različite planove članstva, Vintage Video Club prilagođava svoje ponude različitim potrebama korisnika. Početni planovi su veoma pristupačni, dok premium planovi nude dodatne beneficije poput ekskluzivnih premijera filmova i ad-free iskustva."
    },
    {
        title: "Da li Vintage Video Club nudi podršku za različite uređaje?",
        text: "Da, naša platforma je kompatibilna sa različitim uređajima, uključujući računare, pametne telefone, tablete, Smart TV uređaje i igraće konzole. Tako možete gledati filmove bilo gde i bilo kada, koristeći uređaj koji vam najviše odgovara."
    },
    {
        title: "Da li Vintage Video Club nudi originalni sadržaj?",
        text: "Da, pored široke kolekcije filmskih klasika, Vintage Video Club takođe nudi originalni sadržaj koji je ekskluzivan za našu platformu."
    },
    {
        title: "Kako mogu kontaktirati korisničku podršku Vintage Video Club platforme?",
        text: "Naša korisnička podrška je tu da vam pomogne u svakom trenutku! Možete nas kontaktirati putem e-pošte, telefona ili live chat-a direktno sa naše web stranice. Naš tim je spreman da odgovori na sva vaša pitanja i reši sve nedoumice."
    }
]
const Faq = () => {
    return (
        <>
            <Navbar/>
            <h1 className='text-6xl font-heading text-center py-12'>Često postavljena pitanja</h1>
            <div className="flex flex-col items-center justify-center gap-4">
                <Accordion data={faqs} />
            </div>
            <Footer/>
        </>
    );
};

function Accordion({ data }) {
    const [curOpen, setCurOpen] = useState(0);
    return (
        <div>
            {
                data.map((accordion,i) => <AccordionItem key={accordion.title} curOpen={curOpen} onOpen={setCurOpen} num={i} title={accordion.title}>{accordion.text}</AccordionItem>)
            }
        </div>
    )
}

function AccordionItem({curOpen, onOpen, num, title, children}) {
    const isOpen = num === curOpen;
    function handleToggle() {
        onOpen(isOpen ? null : num)
    }
    return (
        <div onClick={handleToggle} className='mb-8 cursor-pointer transition-all duration-200 w-[440px] md:w-[750px]'>
            <div className={`flex items-center justify-between py-2 px-4 border-2 border-dark dark:border-darkModeLight transition-all duration-100 ${isOpen ? 'bg-dark text-light dark:bg-darkModeLight dark:text-darkModeBlack' : ''}`}>
                <div className='flex'>
                    <p className='font-text text-faq-title pr-4'>{num < 9 ? `0${num+1}` : num+1}.</p>
                    <p className='font-text text-faq-title'>{title}</p>
                </div>
                <button className={`text-4xl ${isOpen ? '' : ''}`}>{isOpen ? <CiCircleMinus /> : <CiCirclePlus />}</button>
            </div>
            {isOpen && <m.p
                initial={{y:-30, opacity: 0}}
                animate={{y:0, opacity: 1, transition: { duration: 0.3 } }}
                className='mt-6 text-faq-answer'>{children}</m.p>}
        </div>
    )
}

export default Faq;