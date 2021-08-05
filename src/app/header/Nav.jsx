import React, { useRef, useState, useEffect } from 'react';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import { FaBars, FaSearch, FaShoppingCart } from 'react-icons/all';


const Nav = () => {

    const [searchButtonStatus, setSearchButtonStatus] = useState(false);

    const mainNav = useRef();
    const searchInputBox = useRef();
    const searchButton = useRef();
    const searchContainer = useRef();
    const mainNavContainer = useRef();


    useEffect(() => {
        document.addEventListener("click", function (e) {
            let navToggler = document.getElementById("navToggler");
            if (navToggler.contains(e.target)) {
                mainNav.current.classList.toggle('d-none');
                // mainNavContainer.current.classList.remove("d-md-block");
            } else {
                mainNav.current.classList.add('d-none');
            }
        });
    }, []);



    const expandSearchBox = (e) => {
        e.preventDefault();
        if (!searchButtonStatus && window.innerWidth > 767) {
            searchInputBox.current.classList.remove("d-md-none");
            searchButton.current.classList.add("expandedSearchButton");
            searchContainer.current.classList.remove("col-md-2");
            searchContainer.current.classList.add("col-md-10");
            mainNavContainer.current.classList.remove("col-md-8");
            mainNavContainer.current.classList.add("d-block");
            mainNavContainer.current.classList.add("d-md-none");
            searchInputBox.current.focus();
            setSearchButtonStatus(true);
        } else {
            searchBoxBlured(e);
            search(e);
        }
    }


    const searchBoxBlured = (e) => {
        searchInputBox.current.classList.add("d-md-none");
        searchButton.current.classList.remove("expandedSearchButton");
        searchContainer.current.classList.add("col-md-2");
        searchContainer.current.classList.remove("col-md-10");
        mainNavContainer.current.classList.add("col-md-8");
        mainNavContainer.current.classList.remove("d-block");
        mainNavContainer.current.classList.remove("d-md-none");
        setSearchButtonStatus(false);
    }


    const search = (e) => {
        console.log("searching");
    }

    return (
        <React.Fragment>
            <div className="container text-center navContainer">
                <div className="row">
                    <div className="col-md-2" ref={searchContainer}>
                        <div className="container">
                            <div className="row searchContainer py-1">
                                <div className="col-8 col-sm-9 col-md-12 text-start">
                                    <div className="search">
                                        <input type="text"
                                            className="searchTerm expandedSearchTerm d-md-none d-inline"
                                            placeholder="Search"
                                            ref={searchInputBox}
                                            onBlur={searchBoxBlured}
                                        />
                                        <button type="submit"
                                            className="searchButton"
                                            onMouseDown={expandSearchBox}
                                            ref={searchButton}>
                                            <FaSearch />
                                        </button>
                                    </div>
                                </div>
                                <div className="col-4 col-sm-3 col-md-none text-end">
                                    <FaShoppingCart
                                        className="d-inline d-md-none mt-3 mx-4 text-light"
                                    />
                                    <FaBars
                                        id="navToggler"
                                        className="d-inline d-md-none mt-3 text-light"
                                    />
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="col-md-8 text-center" ref={mainNavContainer}>
                        <Router>
                            <nav id="menu" className="position-relative">
                                <ul className="d-md-block d-none" ref={mainNav}>
                                    <li><NavLink activeClassName="active" exact to={`${process.env.PUBLIC_URL}/`}>Home</NavLink></li>
                                    <li><NavLink activeClassName="active" exact to={`${process.env.PUBLIC_URL}/features/`}>Features</NavLink></li>
                                    <li><NavLink activeClassName="active" exact to={`${process.env.PUBLIC_URL}/travel/`}>Travel</NavLink></li>
                                    <li><NavLink activeClassName="active" exact to={`${process.env.PUBLIC_URL}/pages/`}>Pages</NavLink></li>
                                    <li><NavLink activeClassName="active" exact to={`${process.env.PUBLIC_URL}/shop/`}>Shop</NavLink></li>
                                    <li><NavLink activeClassName="active" exact to={`${process.env.PUBLIC_URL}/about/`}>About</NavLink></li>
                                    <li><NavLink activeClassName="active" exact to={`${process.env.PUBLIC_URL}/contact/`}>Contact</NavLink></li>
                                </ul>
                            </nav>
                        </Router>
                    </div>
                    <div className="col-md-2 d-none d-md-block text-end">
                        <FaShoppingCart className="mx-3 cart-btn pointer" />
                    </div>


                </div>
            </div>

        </React.Fragment>
    );
}

export default Nav;