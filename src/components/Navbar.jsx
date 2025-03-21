import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

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
    <ul className='hidden md:flex gap-12'>
        {navItems.map(({path, title}) => (
                <li key={path} className='text-base text-black'>
                     <NavLink
                    to={path}
                    className={({ isActive}) =>isActive? "active":"" }
                  >
                    {title}
                    
                  </NavLink>
                </li>
        ))}
    </ul>
    {/* sign up and login button */}
    <div className='text-base text-blue-600 font-medium space-x-5 hidden lg:block'>
      <Link to="/login" className='py-2 px-5 border rounded'> Log in </Link>
      <Link to="/sign-up" className='py-2 px-5 border rounded bg-blue-600 text-white'>Sign up</Link>

    </div>
</nav>

    </header>
  )
}

export default Navbar
