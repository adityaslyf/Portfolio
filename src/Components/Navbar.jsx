import {Link,Routes,Route} from "react-router-dom";
import ProjectCards from "./ProjectCards";
const Navbar = () => {
  return (
    <>
    
        <div className=" bg-slate-500 flex flex-col justify-between h-[100vh] w-16 rounded-2xl mx-2">
          <span>
            <Link to="/www.google.com">About</Link>
          </span>
          <span>Contact</span>
          <span>Projects</span>
          <span>Github</span>
          <span>Linkedin</span>
          <span>Twitter</span>
        </div>
      
     
    </>
  );
};

export default Navbar;
