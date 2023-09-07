import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
    state = {  } 
    render() { 
        return (
                <div className="row text-center pt-5 pb-3 text-md-start justify-content-evenly footer bg-dark text-white-50 p-2 m-0">
                
                <div className="col-6 col-lg-3 mb-5 text-center p-0">
                    <h5 className="mb-3 fs-5 title-footer ">
          <i className="fa-brands fa-pagelines me-2"></i> <i>Chic Chick</i>
                </h5>
          <p className="p-1"> Chic Styles For Every Chick </p>
          <div class="copyright">
            Created By <span class="myname">Mariam Atef</span>
            <div>&copy; 2022 - ITI summer training</div>
          </div>
            </div>

        <div class="col-6 col-lg-2 mb-5 text-center p-0">
          <h5 class="title-footer">Links</h5>
            <ul class="list-unstyled lh-lg ">
                <li><Link to="/home/new" class="nav-link footer-link">Home</Link></li>
                <li><Link to="/about" class="nav-link footer-link">About Us</Link></li>
                <li><Link to="/contact" class="nav-link footer-link">Contact</Link></li>
              </ul>
        </div>

        <div class="col-6 col-lg-2 mb-5 text-center">
          <h5 class="title-footer">About <i>Chic Chick</i></h5>
  <p className="copyright p-2">We're an online women clothes store that sells international trends and styles at reasonable prices</p>
        </div>

        <div class="col-6 col-lg-3 mb-5 text-center">
          <h5 class="title-footer">Find Us on Social Media</h5>
              <ul class="d-flex mt-2 list-unstyled gap-1 justify-content-center socialmedia">
                <li>
                  <Link class="d-block text-white-50" to="/home/new"> <i class="fa-brands fa-facebook fa-2x"></i></Link> </li>
                <li>
                  <Link class="d-block text-white-50" to="/home/new">  <i class="fa-brands fa-twitter fa-2x"></i> </Link> </li>
                <li>
                  <Link class="d-block text-white-50" to="/home/new"> <i class="fa-brands fa-linkedin fa-2x"></i></Link> </li>
                <li>
                  <Link class="d-block text-white-50" to="/home/new"> <i class="fa-brands fa-youtube fa-2x"></i></Link>
                  </li>
              </ul>
            </div>

        </div>

      
  );
    }
}
 
export default Footer;