import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const handleMenuToggler = () => {
        setIsMenuOpen(!isMenuOpen)
    }
    const navItems =[
        {path:"/",title: "start a search"},
        {path:"/my-job",title: "MY-jobs"},
        {path:"/salary",title: "Salary Estimate"},
        {path:"/post-job",title: "Post A Job"}
    ]
  return (
    <header>
      <nav>
    <a href="/" className='flex itmes-center gap-2 text-2xl text-black'> 
        <svg xmlns="http://www.w3.org/2000/svg" width="29" height="30" viewBox="0 0 29 30" fill="none">
            <circle cx="12.0143" cy="12.5143" r="12.0143" fill="#3575E2" fill-opacity="0.4"/>
            <circle cx="16.9857" cy="12.0143" r="12.0143" fill="#3575E2"/>
        </svg>
        <span>Job Portal</span>
    </a>
    {/* nav items for large devices */}
    <ul>
        {
            navItems.map(({path, title}) => {
                <li key={path}>
                     <NavLink
                    to={path}
                    className={({ isActive, isPending }) =>
                      isActive
                        ? "active"
                        : isPending
                        ? "pending"
                        : ""
                    }
                  >
                    {title}
                    
                  </NavLink>
                </li>
            })
        }
    </ul>
</nav>

    </header>
  )
}

export default Navbar
