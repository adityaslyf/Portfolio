import "./App.css";
import Navbar from "./Components/Navbar";
import ProfileImg from "./assets/aditya.svg";
 import ProjectCards from "./Components/ProjectCards";

function App() {
  return (
    <>
    
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
      <img src={ProfileImg} className=" h-[100vh] absolute right-0" alt="" />
      <Navbar />
      <div className=" bg-yellow-500 w-72 rounded-lg mx-9">
      <ProjectCards/>
      </div>
    
      
    </>
  );
}

export default App;
  
