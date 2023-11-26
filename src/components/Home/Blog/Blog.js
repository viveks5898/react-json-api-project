import React from 'react'
import './blog.css';
import Navbar from '../Pages/Navbar';
import Footer from '../Pages/Footer';
import blog from "../../../data/blog.json";
import Singleblog from './Singleblog';
import {
	Link, NavLink
} from 'react-router-dom';
import { useGlobalContext } from '../../../context/Context';

function Blog() {
    const array = useGlobalContext(
        
    )
    console.log("data", array)
    return (
        <>
            <Navbar></Navbar>
            <div className='container '>
                <div className='row'>
                    <div className='col-sm-12'>
                        <div className="posts blog-section">
                            {blog.map(post => {
                                return (
                                    <div key={post.id}>
                                    <h1 className='post-heading'>{post.heading}</h1>
                                   <p className='post-p'>{post.content}</p>
                                   <NavLink className='style-1' to={"/blog/"+post.id}>{post.readmore}</NavLink>
                                      </div>                                  
                              )
                            })}
                        </div>

                    </div>
                </div>
            </div>
                            
            <Footer></Footer>
        </>
    )
}

export default Blog