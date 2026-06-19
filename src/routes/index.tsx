import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "@pages/home"
import About from "@pages/about"
import Certifications from "@pages/certifications"
import Projects from "@pages/projects"
import ScrollToTop from "@components/scrollToTop"

export default function AppRoutes() {
    return(
        <BrowserRouter>
            <ScrollToTop/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/sobre" element={<About/>}/>
                <Route path="/certificacoes" element={<Certifications/>}/>
                <Route path="/projetos" element={<Projects/>}/>
            </Routes>
        </BrowserRouter>
    )
}