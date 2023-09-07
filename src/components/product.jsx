import React from 'react';

const Product = (props) => {
    let p = props.product;
    return (<div className="row fs-6 text-start align-items-center justify-content-evenly">

        <div className="col-1">{p.count}x</div> 
        <div className="col-5 p-0">{p.name}</div>
        <div className="col-2 p-0">{p.totalPrice}LE</div>
        <div className="adjustment p-0 me-1 col-3 d-flex justify-content-evenly">
            <span onClick = {()=>{props.onInc(p)}} className="btn btn-info pe-2 ps-2 col-4 me-1 mb-2">+</span>
            <span onClick = {()=>{props.onDec(p)}} className="btn btn-secondary  pe-2 ps-2 col-4 me-1 mb-2">-</span>
            <span onClick= {()=> {props.onDelete(p)}} className="btn btn-danger ps-0 pe-0 col-3 mb-2 "><i className="fa-solid fa-trash"></i> </span>
        </div>
        </div>);
}
 
export default Product;
