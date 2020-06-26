import React from 'react'
import { Link } from 'react-router-dom'
import Logout from './Logout'

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-dark bg-primary mb-5">
                <div className="container">
                    <Link className="navbar-brand" to="/main"> <span style={{ fontWeight: 'bold' }}>GitHub </span>Jobs</Link>
                    <Logout />
                </div>
            </nav>

        </>
    )
}

export default Navbar;
