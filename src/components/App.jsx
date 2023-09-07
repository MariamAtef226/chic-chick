import React, { Component } from "react";
import {  Route, Routes } from "react-router-dom";

import About from "./about";
import Contact from "./contact";
import Home from "./home";
import TopsSlider from "./topslider";
import NewSlider from "./newslider";
import BottomsSlider from "./bottomslider";
import DressesSlider from "./dressslider";
import Layout from "./Layout";

class App extends Component {
  assignToCart = function () {
    var products = [];
    for (let i = 0; i < window.localStorage.length; i++) {
      let name = window.localStorage.key(i);
      let strings = window.localStorage[name].split("-");
      let obj = {
        name: name,
        price: Number(strings[0]),
        count: Number(strings[1]),
        totalPrice: Number(strings[2]),
      };
      products.push(obj);
    }
    if (products.length !== 0) {
      console.log(products);
      this.setState({ cart: products });
    }
    console.log(window.localStorage);
    return products;
  };
  state = {
    cart: this.assignToCart(), //array of products {name, price, count}
  };

  count = () => {
    var count = 0;
    for (let i = 0; i < this.state.cart.length; i++) {
      for (let j = 0; j < this.state.cart[i].count; j++) {
        count += 1;
      }
    }
    return count;
  };

  totalPrice = () => {
    var p = 0;
    for (let i = 0; i < this.state.cart.length; i++) {
      p += this.state.cart[i].totalPrice;
    }
    return p;
  };

  addProduct = (p) => {
    this.assignToCart();
    var prods = [];
    if (this.state.cart.length !== 0) prods = this.state.cart;
    let index = -1;

    for (let i = 0; i < prods.length; i++) {
      if (prods[i].name === p.name) index = i;
    }
    if (index === -1) {
      //adding new element
      let obj = { name: p.name, price: p.price, count: 1, totalPrice: p.price };
      prods.push(obj);
      this.setState({ cart: prods });
      window.localStorage.setItem(p.name, `${p.price}-${obj.count}-${p.price}`); // key: product name, value: price - count - totalprice
    } else {
      //incrementing existing element
      prods[index].count += 1;
      prods[index].totalPrice += prods[index].price;
      this.setState({ cart: prods });
      window.localStorage.setItem(
        p.name,
        `${p.price}-${prods[index].count}-${prods[index].totalPrice}`
      ); // key: product name, value: price - count - totalprice
    }
  };

  incQuantity = (p) => {
    this.assignToCart();
    let products = this.state.cart;
    let index = products.indexOf(p);
    products[index].count++;
    products[index].totalPrice += products[index].price;
    this.setState({ cart: products });
    window.localStorage.setItem(
      p.name,
      `${p.price}-${products[index].count}-${products[index].totalPrice}`
    );
  };

  deleteElement = (p) => {
    this.assignToCart();
    this.setState({ cart: this.state.cart.filter((el) => el !== p) });
    window.localStorage.removeItem(p.name);
  };

  decElement = (p) => {
    this.assignToCart();
    let products = this.state.cart;
    let index = products.indexOf(p);
    products[index].count--;
    products[index].totalPrice -= products[index].price;
    if (products[index].count === 0) {
      products.splice(index, 1);
      window.localStorage.removeItem(p.name);
    } else
      window.localStorage.setItem(
        p.name,
        `${p.price}-${products[index].count}-${products[index].totalPrice}`
      );
    this.setState({ cart: products });
  };

  render() {
    return (
      <Routes>
        <Route
          path="/chic-chick"
          element={
            <Layout
              cart={this.state.cart}
              add={this.incQuantity}
              dec={this.decElement}
              delete={this.deleteElement}
              total={this.count()}
              tprice={this.totalPrice()}
            />
          }
        >
          <Route path="/chic-chick" element={<Home  />}>
            <Route index element={<NewSlider add={this.addProduct}/>} />
            <Route path="top" element={<TopsSlider add={this.addProduct} />} />
            <Route path="bottom" element={<BottomsSlider add={this.addProduct} />} />
            <Route path="dress" element={<DressesSlider add={this.addProduct} />} />
          </Route>

          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          {/*  <Route path="/cart" element={<Cart />} /> */}
        </Route>
      </Routes>
    );
  }
}

export default App;
