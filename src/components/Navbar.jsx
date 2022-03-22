import React from 'react'
import {Link} from 'react-router-dom';

import { Search } from './Search';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'


const Navbar = ({ darkTheme , setDarkTheme }) => {
  return (
    <div className='p-8 pb-0 flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-gray-700 border-gray-300'>
        <div className='flex justify-between item-center space-x-5 w-screen' >
            <Link to="/">
                <p className='text-4xl font-bold text-black py-1 px-2 dark:text-white'>
                   Goggle  
                   <FontAwesomeIcon icon={faSearch} className='ml-2'/>
                </p>
                
            </Link>
           
            <button type="button" onClick = { ()=> setDarkTheme(!darkTheme)} className="text-xl bg-white rounded-full border px-3 py-2 dark:bg-gray-50 dark:text-gray-900 hover:shadow-lg ">
                { darkTheme ? 'Light💡' : 'Dark🌙 ' }
            </button>

        </div>
        <Search />
        
        
    </div>
  )
}

export default Navbar