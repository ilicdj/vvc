import {Route, Routes, useLocation} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Kontakt from "./pages/Kontakt.jsx";
import Filmovi from "./pages/Filmovi.jsx";
import Onama from "./pages/Onama.jsx";
import Film from "./pages/Film.jsx";
import Faq from "./pages/Faq.jsx";
import PetNajboljeOcenjenih from "./pages/PetNajboljeOcenjenih.jsx";
export default function App() {
    const location = useLocation();
    return (
        <Routes location={location} key={location.pathname}>
            <Route index element={<Home />} />
            <Route path={'/o-nama'} element={<Onama />} />
            <Route path={'/kontakt'} element={<Kontakt />} />
            <Route path={'/filmovi'} element={<Filmovi />} />
            <Route path={'/faq'} element={<Faq />} />
            <Route path={'/pet-najbolje-ocenjenih'} element={<PetNajboljeOcenjenih />} />
            <Route path={'/filmovi/:slug'} element={<Film />} />
        </Routes>
    )
}
