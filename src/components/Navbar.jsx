import { BsCart3, BsMoonFill, BsSunFill } from "react-icons/bs";
import { FaBarsStaggered } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import Navlinks from "./Navlinks"
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const themes = {
   light: 'winter',
   dark: 'dracula'
}




function Navbar() {
   const [theme, setTheme] = useState(localStorage.getItem('theme') || themes.light)
   const handleTheme = (e) => {
      if (e.target.checked) {
         setTheme(themes.dark)
      } else {
         setTheme(themes.light)
      }

   }

   const { numItemsInCart, cartItems } = useSelector((state) => state.cartState)
   console.log(cartItems)

   useEffect(() => {
      localStorage.setItem('theme', theme)
      document.documentElement.setAttribute('data-theme', theme)
   }, [theme])


   return (
      <nav className="bg-base-200">
         <div className="align-elements">
            <div className="navbar ">
               <div className="navbar-start">
                  <NavLink
                     to="/"
                     className="hidden btn lg:flex btn-primary text-3xl items-center"
                  >
                     c
                  </NavLink>
                  <div className="dropdown">
                     <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <FaBarsStaggered className="h-6 w-6" />
                     </label>
                     <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content z-[1] mt-3 p-2 shadow bg-base-200"
                     >
                        <Navlinks />
                     </ul>
                  </div>
               </div>
               <div className="navbar-center hidden lg:flex">
                  <ul className="menu menu-horizontal gap-2">
                     <Navlinks />
                  </ul>
               </div>
               <div className="navbar-end">
                  <label className="swap swap-rotate">
                     <input type="checkbox" onChange={handleTheme} checked={theme === themes.light ? false : true} />
                     <BsSunFill className="swap-on h-4 w-4" />
                     <BsMoonFill className="swap-off h-4 w-4" />
                  </label>
                  <NavLink to="/cart" className="btn btn-circle btn-md ml-4">
                     <div className="indicator">
                        <BsCart3 className="w-6 h-6" />
                        <span className="badge badge-sm badge-primary indicator-item">
                           {numItemsInCart}
                        </span>
                     </div>
                  </NavLink>
               </div>
            </div>
         </div>

      </nav>
   );
}

export default Navbar;