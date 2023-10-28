import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import { CartProvider } from 'react-use-cart'

const Register = () => {
  return (
    <CartProvider>
      <NavBar />
      <div className='pt-5'></div>
      <div className='pt-5'></div>
      register
      <Footer />
    </CartProvider>
  )
}

export default Register