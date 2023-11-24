import './App.scss'
// import { Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import ProjectCards from './Components/Card/ProjectCards'
import HeroBg from './Components/HeroBg/HeroBg'
import Contact from './Components/Contact/Contact'

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
                
                    <ProjectCards />
               
            </section>
            <section>Parralax</section>
            <section>
           
                <Contact />
                {/* <Route path="/contact" component={<Contact />} /> */}
           
         
            </section>
        </>
       
    )
}


