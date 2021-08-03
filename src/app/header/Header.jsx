import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <div className="container-fluid text-center p-5">
                <Link className="hero-title" to="/">JESSI</Link>
            </div>
        </header>
    )
}

export default Header;