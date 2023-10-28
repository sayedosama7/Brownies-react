import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import NavBar from './NavBar'
import Footer from './Footer'
import { CartProvider } from 'react-use-cart'

export class Menu extends Component {
    render() {
        return (
            <CartProvider>
                <NavBar/>
                <div className='pt-5'></div>
                <h2 className="title-center pt-4">الأقسام</h2>
                <div className="d-flex justify-content-center menu">
                    <div className="d-flex flex-column  overflow-hidden ml-3 box">
                        <Link to="/gateax">
                            <img className="left mb-3" src="images/menu/menu-1.jpeg" alt="" />
                        </Link>
                        <Link to="/bakery">
                            <img className="left" src="images/menu/menu-2.jpg" alt="" />
                        </Link>
                    </div>
                    <div className='overflow-hidden'>
                        <Link to="/yamesh">
                            <img className="mid" src="images/menu/menu-3.jpg" alt="" />
                        </Link>
                    </div>
                    <div className="d-flex flex-column overflow-hidden mr-3 box">
                        <Link to="/elmoled">
                            <img className="right  mb-3" src="images/menu/menu-4.jpg" alt="" />
                        </Link>
                        <Link to="/oriental">
                            <img className="right" src="images/menu/menu-5.jpg" alt="" />
                        </Link>
                    </div>
                </div>
                <Footer/>
            </CartProvider>

        )
    }
}

export default Menu