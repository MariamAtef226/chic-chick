import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Cart from './cart';


class NavBar extends Component {


  cartClick = ()=> {
      let c = document.querySelector(".outer");
      c.style.display = "block";
  }



    render() { 
        return (
          <nav className="main-nav navbar navbar-expand-lg bg-dark position-sticky top-0">
        <div className="container justify-content-between">

          <NavLink className="navbar-brand d-flex align-items-center" to="/chic-chick">
          <i class="fa-brands fa-pagelines me-2 "> </i>
              Chic Chick
          </NavLink>
        
          <div className="d-flex">
          <button className="d-lg-none cart bg-dark btn fs-6 light" type="button" cart ={this.props.cart} onClick={this.cartClick}>
           <span><i className="fa-solid fa-cart-shopping fs-5 light"></i>&nbsp;{this.props.total}</span>
          </button>

          <Cart id="cartWindow" prods={this.props.cart} add = {this.props.add} dec = {this.props.dec} delete={this.props.delete} totprice = {this.props.tprice} />

          <button className="navbar-toggler light ms-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <i className="fa-solid fa-bars"></i>
          </button>
          </div>
          
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            
            <button className="num-cart d-none d-lg-block cart bg-dark btn fs-6 light" type="button" cart ={this.props.cart} onClick={this.cartClick}>
            <span><span className='text-light pe-2'>Cart</span>
             {this.props.total}</span>
          </button>

              <li className="nav-item">
                <NavLink activeClassName="active" className="nav-link light" aria-current="page" to="/chic-chick">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeClassName="active" className="nav-link light" to="about">About us</NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeClassName="active" className="nav-link light" to="contact">Contact</NavLink>
              </li>
            </ul>
          </div>
        </div>
        </nav>

      );
    }
}
 
export default NavBar;