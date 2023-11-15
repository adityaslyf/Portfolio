import './App.scss'
// import { Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'

// import ProjectCards from './Components/ProjectCards'
// import About from './Components/Pages/About'
// import Contact from './Components/Pages/Contact'
import Hero from './Components/Hero/Hero'
import Contact from './Components/Contact/Contact'
import HeroBg from './Components/HeroBg/HeroBg'

// import Sidebar from './Components/Sidebar/Sidebar'

function App() {
    return (
        <>
            <section>
                <HeroBg />
                {/* <HeroBg /> */}

                {/* <Navbar className=" sm:hidden " />
                <Routes>
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes> */}

                <div className=" relative">
                    <Navbar />

                    <Hero />
                </div>
            </section>
            <section></section>
            parralax
            <section>
                Cards
                {/* <div className=" bg-yellow-500 w-72 rounded-lg mx-9">
                    <ProjectCards />
                </div> */}
            </section>
            <section>Parralax</section>
            <section>
                <Contact />
            </section>
        </>
    )
}

export default App
