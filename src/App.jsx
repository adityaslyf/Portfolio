import './App.scss'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Contact from './Components/Contact/Contact'
import HeroBg from './Components/HeroBg/HeroBg'

 export default function App() {
    return (
       
        <>
     
        <section>
        <div className=' '>
           <HeroBg />
               
               <Navbar />
               <Hero />
           </div>
        </section>
           
                
               
           
            <section>parralax</section>
         
            <section>
                Cards
                {/* <div className=" bg-yellow-500 w-72 rounded-lg mx-9">
                    <ProjectCards />
                </div> */}
            </section>
            <section>Parralax</section>
            <section>
            <Routes>
                {/* <Contact /> */}
                <Route path="/contact" component={<Contact />} />
           
            </Routes>
            </section>
        </>
       
    )
}


