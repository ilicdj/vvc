import {AiFillInstagram} from "react-icons/ai";
import {RiTiktokFill} from "react-icons/ri";

const Footer = () => {
    return (
        <footer className='mt-8 py-4 md:py-12 border-t-2 border-dark dark:border-darkModeLight'>
            <div
                className="grid grid-rows-1 md:grid-cols-3 text-center md:max-w-128">
                <h2 className='text-heading font-heading py-8 md:py-0 md:border-t-0 flex justify-center items-center dark:border-darkModeLight'>Vintage Video Club</h2>
                <div className='flex flex-col items-center border-t-2 border-dark md:pl-8 md:border-l-2 py-8 md:py-0 md:border-t-0 dark:border-darkModeLight'>
                    <h3 className='text-heading font-heading'>Lokacija</h3>
                    <p className='text-heading font-heading'>Vojvode Stepe 283</p>
                </div>
                <div className='border-t-2 border-dark md:pl-8 md:border-l-2 py-8 md:py-0 md:border-t-0 dark:border-darkModeLight'>
                    <h3 className='text-heading font-heading text-center'>Pratite nas</h3>
                    <div className='flex justify-center gap-5 mt-4'>
                        <a href="#" className='text-heading'><AiFillInstagram/></a>
                        <a href="#" className='text-heading'><RiTiktokFill/></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;