import React, {useEffect, useState} from 'react';
import Navbar from "../components/Navbar.jsx";
import axios from "axios";
import Footer from "../components/Footer.jsx";
import TableView from "../components/TableView.jsx";
import GridView from "../components/GridView.jsx";


const Filmovi = () => {

    const [movies, setMovies] = useState([]);
    const [isTable, setIsTable] = useState(true);

    const handleIsTable = () => {
        setIsTable(!isTable);
    }

    useEffect(() => {
        const fetchMovies = async () => {
            try{
                const res = await axios.get('http://127.0.0.1:5555/api/v1/filmovi/');
                setMovies(res.data.data.filmovi)
            } catch {
                console.log('Fetching error');
            }
        }
        fetchMovies();
    }, []);
    if(!movies) {
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

    return (
        <>
            <Navbar/>
            <div className='px-6'>
                <h1 className='font-heading text-6xl text-center py-12 md:text-big-headings'>filmovi</h1>
                <div className='text-center'>
                    <button
                        onClick={() => handleIsTable()}
                        className='custom-btn py-5 px-12 mb-12 font-headings border-2 border-dark duration-200 dark:border-light'>Promeni pregled filmova
                    </button>
                </div>
                {
                    isTable ? <GridView movies={movies} /> : <TableView movies={movies} />
                }
            </div>
            <Footer/>
        </>
    );
};


export default Filmovi;