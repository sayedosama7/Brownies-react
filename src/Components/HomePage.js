import React, { Component } from 'react'
import NavBar from './NavBar'
import Header from './Header'
import MiniSandwitch from './MiniSandwitch'
import Special from './Special'
import Menu from './Menu'
import MostSelling from './MostSelling'
import Footer from './Footer'

export class HomePage extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <Header/>
        <MiniSandwitch/>
        <Special/>
        <Menu/>
        <MostSelling/>
        <Footer/>
        
      </div>
    )
  }
}

export default HomePage