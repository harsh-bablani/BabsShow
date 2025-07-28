import React from 'react'
import { Link } from 'react-router-dom'
import assets from '../assets/assets'
import { MenuIcon, SearchIcon, XIcon } from 'lucide-react'

const Navbar = () => {
  return (
    <div className='fixed top-0 left-0 w-full flex items-center justify-between px-6 md:px-16 lg:px-36 py-5'>
      <Link className='fixed top-0 left-0 w-full h-full z-[-1]' to='/'>
      <img src={assets.logo} alt="Logo" className='w-36 h-auto' />
      </Link>

      <div className='max-md:absolute max-md:top-0 max-md:left-0 max-md:w-full max-md:h-screen max-md:bg-black/50 max-md:flex max-md:items-center max-md:justify-center max-md:gap-8 md:flex hidden gap-6 text-white'>
        <XIcon className='max:hidden w-6 h-6 cursor-pointer' />
        <Link to='/'>Home</Link>
        <Link to='/movies'>Movies</Link>
        <Link to='/'>Theaters</Link>
        <Link to='/'>Releases</Link>
        <Link to='/favorite'>Favorites</Link>
      </div>

      <div className='flex items-center gap-8'>
        <SearchIcon className='max:hidden w-6 h-6 cursor-pointer'/>
        <button className='px-4 py-1 sm:px-7 sm:py-2 bg-primary hover:bg-primary-dull transition rounded-full font-medium cursor-pointer'>Login</button>
      </div>
      
      <MenuIcon className='max-md:block md:hidden lg:hidden text-white w-8 h-8 cursor-pointer' />
    </div>
  )
}

export default Navbar
