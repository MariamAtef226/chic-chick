import React, { Component } from 'react';

class ProductCard extends Component {
    state = { 
        name:this.props.name,
        price: this.props.price
     } 
    render() { 
        return (
                 <div className="card-body d-flex flex-column justify-content-end">
                <h5 className="card-title">{this.props.name}</h5>
                <p className="card-text price">Price: {this.props.price} LE</p>
                <button class="btn btn-info" onClick={()=>{this.props.add({name:this.state.name, price:Number(this.state.price)})}}>Add to Cart</button>
            </div>
        );
    }
}
 
export default ProductCard ;