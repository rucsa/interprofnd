import React from 'react'; 

const Footer = props => {
    return (
      <footer className="footer footer-default">
	    <div className="container">
	      <nav className="float-left">
	        <ul>
	          <li>
	            <a href="https://www.creative-tim.com">
	              Creative Tim
	            </a>
	          </li>
	          <li>
	            <a href="https://creative-tim.com/presentation">
	              About Us
	            </a>
	          </li>
	          <li>
	            <a href="http://blog.creative-tim.com">
	              Blog
	            </a>
	          </li>
	          <li>
	            <a href="https://www.creative-tim.com/license">
	              Licenses
	            </a>
	          </li>
	        </ul>
	      </nav>
	      <div className="copyright float-right">
	        &copy;
	        <h4>Made by Vulpix</h4>
	      </div>
	    </div>
	  </footer>
    );
}

export default Footer;