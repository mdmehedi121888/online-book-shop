import React, { useState } from 'react';
import { BoltIcon,Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'
import { Link, NavLink } from 'react-router-dom';
import './Header.css';
const Header = () => {
    const [isMenuOpen,setIsMenuOpen]=useState(false);
    return (
        <div>
            <div className='lg:flex py-5 px-5 bg-gray-100 justify-between mx-auto lg:w-[75%] hidden'>
        {/* logo part */}
        <Link to='/' className='inline-flex gap-4'>
        <BoltIcon className="h-6 w-6 text-blue-500" />
            <span className='text-2xl font-bold'>nextPage</span>
        </Link>
        {/* nav part */}
        <ul className='inline-flex gap-5 text-xl'>
            <li><NavLink to='/' className={({isActive})=>isActive?'active':''}>Home</NavLink></li>
            <li><NavLink to='/books' className={({isActive})=>isActive?'active':''}>Books</NavLink></li>
            <li><NavLink to='/about' className={({isActive})=>isActive?'active':''}>About Us</NavLink></li>
        </ul>
        </div>

        {/* Mobile Navbar Section */}

        <div className='lg:hidden py-10 px-5  bg-gray-100 flex justify-between relative'>
        <Link to='/' className='inline-flex gap-4 px-10' >
        <BoltIcon className="h-6 w-6 text-blue-500" />
            <span className='text-2xl font-bold'>nextPage</span>
        </Link>
        <button title='Open Menu' className='px-10' onClick={()=>setIsMenuOpen(!isMenuOpen)}>
        <Bars3BottomRightIcon className='w-7'></Bars3BottomRightIcon>
        </button>
        {
            isMenuOpen && (
                <div className='absolute top-0 left-0 w-full z-10'>
              <div className='p-5 bg-white border rounded shadow-sm'>
                {/* Logo & Button section */}
                <div className='flex items-center justify-between mb-4'>
                  <div>
                    <Link to='/' className='inline-flex items-center'>
                      <BoltIcon className='h-6 w-6 text-blue-500' />
                      <span className='ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase'>
                        nextPage
                      </span>
                    </Link>
                  </div>
                  {/* Dropdown menu close button */}
                  <div>
                    <button
                      aria-label='Close Menu'
                      title='Close Menu'
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <XMarkIcon className='w-5 text-gray-600' />
                    </button>
                  </div>
                </div>
                {/* Mobile Nav Items Section */}
                <nav>
                  <ul className='space-y-4'>
                    <li>
                      <Link to='/' className='default'>
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        to='/books'
                        className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'
                      >
                        Books
                      </Link>
                    </li>
                    <li>
                      <Link
                        to='/about'
                        className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'
                      >
                        About Us
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            )
        }
    </div>
        </div>
    );
};

export default Header;