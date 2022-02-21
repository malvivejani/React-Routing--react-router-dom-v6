import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import './style.css';

function Layout() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-item nav-link active" to="/home">Home <span className="sr-only">(current)</span></Link>
                        <Link className="nav-item nav-link" to="/about">About</Link>
                        <Link className="nav-item nav-link" to="/contact-us">Contact Us</Link>
                    </div>
                </div>
            </nav>
            <div className="sidebar">
                <NavLink to="/">Employee</NavLink>
                <NavLink to="/appraisalList">Appraisals</NavLink>
                <NavLink to="/payrollList">Payroll</NavLink>
            </div>
            <Outlet />
        </>
    )
}

export default Layout;