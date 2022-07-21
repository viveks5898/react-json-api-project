import React from 'react'
import './navbar.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Blog from '../Blog/Blog';
import {
    NavLink, Link
} from 'react-router-dom';


const Navbar = () => {

    return (
        <>
       
            <div className="container">

                <nav className="navbar navbar-dark navbar-expand-sm bg-dark fixed-top">
                    <div className="container">
                        <a href="/" className="navbar-brand">
                            <i className="fas fa-blog "></i> &nbsp;
                            Blog Template
                        </a>

                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse">
                            <span className="navbar-toggler-icon"></span>
                        </button>


                        <div id="navbarCollapse" className="collapse navbar-collapse">
                            <ul className="navbar-nav px-4">
                                <li className="nav-item">
                                <Link className='nav-link active' to="/frontend">Home</Link>
                                </li>

                                <li className="nav-item">

                                    <Link className='nav-link active' to="/blog">Blog</Link>
                                </li>
                                <li className="nav-item">
            
                                    <Link className='nav-link active' to="/products">Products</Link>
                                </li>
                                <li className="nav-item">
                                    <a href="" className="nav-link active">
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            <ToastContainer />
        </>
    )
}

export default Navbar