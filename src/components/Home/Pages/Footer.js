import React from 'react'
import './footer.css';

function Footer() {
  return (
<footer className="mainfooter " role="contentinfo">
  <div className="footer-middle">
  <div className="container">
    <div className="row">
      <div className="col-md-3 col-sm-6">
  
        <div className="footer-pad">
          <h4>Company</h4>
          <ul className="list-unstyled">
            <li><a href="#"></a></li>
            <li><a href="#">Payment Center</a></li>
            <li><a href="#">Contact Directory</a></li>
            <li><a href="#">Forms</a></li>        
          </ul>
        </div>
      </div>
      <div className="col-md-3 col-sm-6">

        <div className="footer-pad">
          <h4>Links</h4>
          <ul className="list-unstyled">
            <li><a href="#">Website Tutorial</a></li>
            <li><a href="#">Accessibility</a></li>
            <li><a href="#">Disclaimer</a></li>
            <li><a href="#">Privacy Policy</a></li>
           
          </ul>
        </div>
      </div>
      <div className="col-md-3 col-sm-6">
       
        <div className="footer-pad">
          <h4>Privacy</h4>
          <ul className="list-unstyled">
            <li><a href="#">Parks and Recreation</a></li>
            <li><a href="#">Public Works</a></li>
            <li><a href="#">Police Department</a></li>
            <li>
              <a href="#"></a>
            </li>
          </ul>
        </div>
      </div>
    	<div className="col-md-3">
    		<h4>Follow Us</h4>
            <ul className="social-network social-circle">
             <li><a href="#" className="icoFacebook" title="Facebook"><i className="fab fa-facebook-f"></i></a></li>
             <li><a href="#" className="icoLinkedin" title="Linkedin"><i className="fab fa-linkedin"></i></a></li>
            </ul>				
		</div>
    </div>
	<div className="row">
		<div className="col-md-12 copy">
			<p className="text-center">&copy; Copyright 2022 - Company Name.  All rights reserved.</p>
		</div>
	</div>


  </div>
  </div>
</footer>
  )
}

export default Footer