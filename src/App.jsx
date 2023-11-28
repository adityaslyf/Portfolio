import './App.scss'
// import { Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Cards from './Components/Card/Cards'
import HeroBg from './Components/HeroBg/HeroBg'
import Contact from './Components/Contact/Contact'
import Map from './Components/Contact/Map'

 const App =() =>{
    return (
       
        <>
     
        <section>
        <div className=' '>
           <HeroBg />
               <Navbar />
               <Hero />
           </div>
        </section>
           
                
               
           
            
         
            <section>
                Cards
                
                    <Cards />
               
            </section>
            
            <section className=' flex'>
           
                <Contact />
                <Map />

                {/* <Route path="/contact" component={<Contact />} /> */}
           
         
            </section>
        </>
       
    )
}

export default App;


