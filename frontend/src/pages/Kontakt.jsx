import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import React from "react";

const Kontakt = () => {
    return (
        <>
            <Navbar/>
            <section className='lg:max-w-[1300px] mx-auto px-4'>
                <h1 className='text-6xl font-heading text-center py-12'>Kontakt</h1>
                <div>
                    <h2 className='text-center text-4xl font-heading mb-4'>Korisnička podrška</h2>
                    <div className="cbr dark:border-darkModeLight">
                        <div className='px-4 py-12 flex justify-between items-center text-heading'>
                            <h3 className='font-heading'>Email</h3>
                            <p className='font-heading'>vvc@yahoo.com</p>
                        </div>
                        <div className='px-4 border-dark border-t-2 py-12 flex justify-between items-center text-heading dark:border-darkModeLight'>
                            <h3 className='font-heading'>Telefon</h3>
                            <p className='font-heading'>+381 777444</p>
                        </div>
                    </div>
                </div>
                <div className='mt-12'>
                    <h2 className='text-center text-4xl font-heading mb-6'>Lokacija</h2>
                    <div>
                        <div className='relative cbr'>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2381.9305493236643!2d20.480112512621442!3d44.768393288481974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a70f8dfe7c471%3A0xbc63da0229aab80b!2sVojvode%20Stepe%20283%2C%20Beograd!5e0!3m2!1sen!2srs!4v1720161280073!5m2!1sen!2srs"
                                width="100%"
                                height="450"
                                style={{border: 0}}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className='cbr'
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    );
};
export default Kontakt;