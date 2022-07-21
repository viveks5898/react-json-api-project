import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import blogs from "../../../data/blog.json";
import Navbar from '../Pages/Navbar';
import './singleblog.css';
import Footer from '../Pages/Footer';
const Singleblog = () => {
    const { id } = useParams();
    const [post, setPost] = useState([]);
    useEffect(() => {
        const ans = blogs.filter(blog => {
            if (id == blog.id) {
                return blog
            }
        }
        )
        if (ans !== undefined) {
            setPost(ans)
        }
    }, []);

    return (
        <>
            <Navbar></Navbar>
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-12'>
                        <div className='singleblog-section'>
                            <h2 className='text-center blog'>Single blog Page
                            {post.length >0 ? post.map(posts => {
                                return (
                                    <div key={posts.id}>
                                    <h1 className='post-heading'>{posts.heading}</h1>
                                   <p className='post-p'>{posts.content, posts.fullblog}</p>
                                      </div>                                  
                              )
                            }) : <p>....loading</p>}
                            </h2>

                        </div>

                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}

export default Singleblog