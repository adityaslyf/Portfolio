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

import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>

        <ul className=" bg-slate-500 flex flex-col justify-between h-[100vh] w-16 rounded-2xl mx-2">
          <li>
            <NavLink to="./about">About</NavLink>
          </li>
          <li>
            <NavLink to="./github">Github</NavLink>
          </li>
          <li>
            <NavLink to="./projects">Projects</NavLink>
          </li>
        </ul>

    </nav>
  );
};
export default Navbar;
