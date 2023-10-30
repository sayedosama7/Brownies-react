import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'

export class MiniSandwitch extends Component {
    render() {
        return (
            <div>
                <div className="container mini">
                    <div className="row">

                        <div className="col-md-6 mini-img wow fadeInUp"data-wow-delay=".3s">
                            <Link to="/bakery"><img className="img-fluid" src="./images/mini-sandwitch.jpeg" alt="mini-sandwitch" /></Link>
                        </div>

                        <div className="col-md-6 mini-caption wow fadeInUp" data-wow-delay=".7s">
                            <h2 className='text-brown fw-bold'>Mini Sandwiches</h2>
                            <p>The most delicious mini sandwiches baked with expertise, taste and quality </p>
                            <NavLink to='/menu'><button className='btn btn-danger'>تسوق الآن</button></NavLink>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MiniSandwitch