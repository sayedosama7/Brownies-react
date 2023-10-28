import React, { Component } from 'react'
import NavBar from './NavBar'
import ScrollToTop from 'react-scroll-to-top'
import Footer from './Footer'
import { CartProvider } from 'react-use-cart'

export class User extends Component {
  render() {
    return (
      <CartProvider>
        <NavBar />
        User

        <Footer />

        <ScrollToTop
          smooth
          color='#663a2a'
          style={{ backgroundColor: '#fbc8c8', width: '60px' }}
        />
      </CartProvider>
    )
  }
}

export default User