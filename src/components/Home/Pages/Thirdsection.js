import React from 'react'
import './thirdsection.css';
function Thirdsection() {
    return (
        <div className='container thirdsection'>
            <div className='row text-center'>
                <div className='col-sm-12'>
                    <div className=' py-3 '>
                        <h1>Featured Content
                            <hr></hr>
                        </h1>
                        
                    </div>
                    <div className='third-p'>
                        <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available</p></div>
                    <div className='video'>
                        <div className="embed-responsive embed-responsive-16by9">
                            <iframe width="100%" height="100%" src="//www.youtube.com/embed/qUJYqhKZrwA?autoplay=0&showinfo=0&controls=0" >
                            </iframe>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Thirdsection