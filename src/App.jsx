import { Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import ProfileImg from "./assets/aditya.svg";
import ProjectCards from "./Components/ProjectCards";
import About from "./Components/Pages/About";
import Contact from "./Components/Pages/Contact";

function App() {
  return (
    <>
      <div className=" m-0 p-0 ">
         <div className=" area">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div className="">
      <img
          src={ProfileImg}
          className="    absolute right-0 h-full object-cover"
          alt=""
        />
        <Navbar className=' sm:hidden ' />
        <Routes>
          {/* <Route path="/" element={<Home />} />  */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/projects" element={<Projects />} /> */}
        </Routes>

        </div>

        <div className=" bg-yellow-500 w-72 rounded-lg mx-9">
          <ProjectCards />
        </div>
      </div>

    </>
  );
}

export default App;


