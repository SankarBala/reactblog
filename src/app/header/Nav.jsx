import React from 'react';
import { BrowserRouter as Router, NavLink } from 'react-router-dom'

import { FaBars, FaShoppingCart } from 'react-icons/all';


const Nav = () => {
    return (
        <React.Fragment>
            <div className="container text-center">
                <div className="row">

                    <div className="col-md-2">
                        <form action="" method="GET">
                            <input type="search" placeholder="Search" />
                        </form>
                    </div>

                    <div className="col-md-8 text-center">
                        <Router>
                            <nav id="menu">
                                <ul className="">
                                    <li><NavLink activeClassName="active" exact to="/">Home</NavLink></li>
                                    <li><NavLink activeClassName="active" exact to="/features">Features</NavLink></li>
                                    <li><NavLink activeClassName="active" exact to="/travel">Travel</NavLink></li>
                                    <li><NavLink activeClassName="active" exact to="/pages">Pages</NavLink></li>
                                    <li><NavLink activeClassName="active" exact to="/shop">Shop</NavLink></li>
                                    <li><NavLink activeClassName="active" exact to="about">About</NavLink></li>
                                    <li><NavLink activeClassName="active" exact to="/contact">Contact</NavLink></li>
                                </ul>
                            </nav>
                        </Router>
                    </div>
                    <div className="col-md-2 text-center">

                        <FaShoppingCart className="mx-3 mt-3" />
                        <FaBars className="mx-3 mt-3" />

                    </div>


                </div>
            </div>

        </React.Fragment>
    );
}

export default Nav;