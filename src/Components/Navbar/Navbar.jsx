// import {
//   Link,
//   createBrowserRouter,
//   RouterProvider,
//   Route,
//   createRoutesFromElements,
// } from "react-router-dom";
// // import ProjectCards from "./ProjectCards";

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route>
//       <Route path="/" element={<Home />} />
//     </Route>
//   )
// );

// const Navbar = () => {
//   return (
//     <>
//
//         <span>
//           <Link to="/www.google.com">About</Link>
//         </span>
//         <span>Contact</span>
//         <span>Projects</span>
//         <span>Github</span>
//         <span>Linkedin</span>
//         <span>Twitter</span>
//       </div>
//       <RouterProvider router={router} />
//     </>
//   );
// };

// export default Navbar;

// import { NavLink } from "react-router-dom";
// import {FcAbout} from "react-icons/fc";

// const Navbar = () => {
//   return (
//     <nav>

//         <ul className=" bg-[#3fb0ac] flex flex-col justify-between h-[100vh] w-16">
//           <li>
//             <NavLink to="/about"><FcAbout size="50px" />About</NavLink>
//           </li>
//           <li>
//             <NavLink to="./github">Github</NavLink>
//           </li>
//           <li>
//             <NavLink to="./projects">Projects</NavLink>
//           </li>
//         </ul>

//     </nav>
//   );
// };
// export default Navbar;


import { Link } from 'react-router-dom'
 import { useState } from 'react'
import './Navbar.css'
const Navbar = () => {
  let [open, setOpen] = useState(false)
  return (
    <div className="upper-div">
      <div className=" second-div">
<div className="third-div">
  <span className=" text-3xl"> <ion-icon name="rocket"></ion-icon> </span>
  Aditya
</div>
<div onClick={()=>setOpen(!open)} className=' menu'>
<ion-icon name={open?  'close' : 'menu'}></ion-icon>

</div>
<ul className={`md:flex md:items-center gap-10 text-xl md:pb-0 absolute bg-sky-800  md:static w-full z-[-1] md:z-auto left-0 md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-18' : 'top-[-465px]'}`}>
  <li>Home</li>
  <li>About</li>
  <li>Work</li>
  <li>Testimonial</li>
 
  <li><Link to="/contact" >Contact</Link></li>

</ul>

    
 



      </div>

    </div>
  )
}
export default Navbar