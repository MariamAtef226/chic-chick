import React from 'react';
import Product from './product';

const Cart = (props) => {

    var closeCart = (el) => {
        let cont = document.querySelector(".outer");
        console.log(cont);
        cont.style.display="none";

    }

    let i=1;
    return ( <div className="outer">
        <div className="cartWindow pb-3 text-center position-relative"> 
        <button onClick={closeCart} className=" text-light position-absolute top-0 end-0 close p-1 pb-2" > Close </button>
            <h3 className ="p-2 pt-5 pb-5 fs-1 text-light cart-title"><i className="fa-solid fa-cart-shopping pe-2"> </i>Your Cart</h3>
        <div className="products-list m-2 ">
        <div className="cart-header row fw-bold "><span className="col-5">Item</span> <span className="col-4">Total Price</span></div>
        <hr className="m-2"/>
        {props.prods.map( (p) => (

            <Product  key= {i++} product = {p} onInc = {props.add} onDec = {props.dec} onDelete={props.delete}/>
            
        ))}
        </div>
        <hr/>
        <div className="fw-bold d-flex justify-content-between ps-3 pe-5">
        <div>Total</div>
        <div>{props.totprice}LE</div></div>
        </div>
        </div>);
}
 
export default Cart;

//onInc = {this.props.add} onDec = {this.props.dec} onDelete={this.props.delete}