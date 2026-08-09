import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav className='flex bg-red-800 text-white fixed w-full p-3'>
      <Link className='text-2xl font-bold' to={'/'}>
      <i className='fa-solid fa-truck-fast me-1'></i>Daily Cart
      </Link>
      <ul className='flex-1 text-right '>

        <li className='list-none inline-block px-5'><input className='rounded p-2 border' style={{width:"300px"}} placeholder='👉 Search Products Name' type="text" /></li>
        <li className='list-none inline-block px-5'><i className='fa-solid fa-heart text-red-600'></i>Wishlist <span className='bg-black text-white rounded p-1'>2</span></li>
        <li className='list-none inline-block px-5'><i className='fa-solid fa-cart-plus text-green-600'></i>Wishlist <span className='bg-black text-white rounded p-1'>2</span></li>
        
      </ul>
    </nav>
  )
}

export default Header