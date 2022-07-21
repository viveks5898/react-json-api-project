import { Button } from 'bootstrap';
import React from 'react'
import './firstsection.css';

function Firstsection() {
 
  return (
    <>
      <div className='container-fluid p-0 firstsection'>
        <div className='image'>
          <div className='imagetext'>
            <h1><span className='span'>A minimal, clean </span><br></br> <span className='span1'>layout for web design</span></h1>
            <button className='btn'>Get Started</button>
          </div>
        </div>
       
      </div>
    </>
          
  )

}

export default Firstsection