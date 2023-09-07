import React, { Component } from 'react';
import ProductCard from './prod-card';

class DressesSlider extends Component {
    render() { 
 
        return (
            <div id="carouselExampleIndicators" className="carousel slide" >
            <h2 className="text-center fw-bold">Dresses</h2>
  <div className="carousel-indicators bg-dark">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
  </div>

  <div className="carousel-inner p-5 pt-3 mb-5 text-center">
    <div className="carousel-item active">
      <div className="row justify-content-xl-center justify-content-lg-around justify-content-md-center justify-content-center">
          
      <div className="container card col-8 col-md-5 col-lg-2 m-xl-4 m-2">
          <img src={require('./products/nightblackdress.PNG')} className="img-fluid" alt="Floral Short Dress"/>
          <ProductCard name="Night Black Dress" price="600" add={this.props.add}/>
          </div>

          <div className="container card col-8 col-md-5 col-lg-2 m-xl-4 m-2">
          <img src={require('./products/FloralShortDress.PNG')} className="img-fluid" alt="Floral Short Dress"/>
          <ProductCard name="Floral Short Dress" price="500" add={this.props.add} />
          </div>
 
          <div className="container card col-8 col-md-5 col-lg-2 m-xl-4 m-2">
          <img src={require('./products/yellowbeachdress.PNG')} className="img-fluid" alt="Floral Short Dress"/>
          <ProductCard name="Yellow Beach Dress" price="500" add={this.props.add} />
          </div>

          <div className="container card col-8 col-md-5 col-lg-2 m-xl-4 m-2">
          <img src={require('./products/blackwhitebeachdress.PNG')} className="img-fluid" alt="Floral Short Dress"/>
          <ProductCard name="Black n White Beach Dress" price="200" add={this.props.add}/>
          </div>
      </div>
    </div>
    <div className="carousel-item">
    <div className="row justify-content-xl-center justify-content-lg-around justify-content-md-evenly justify-content-center">
          <div className="container card col-8 col-md-5 col-lg-2 m-xl-4 m-2">
          <img src={require('./products/burgendyclassydress.PNG')} className="img-fluid" alt="Floral Short Dress"/>
          <ProductCard name="Burgendy Classy Dress" price="500" add={this.props.add}/>
          </div> 
          <div className="container card col-8 col-md-5 col-lg-2 m-xl-4 m-2">
          <img src={require('./products/pinkfloraldress.PNG')} className="img-fluid" alt="Floral Short Dress"/>
          <ProductCard name="Pink Floral Dress" price="300" add={this.props.add}/>
          </div>

          <div className="container card col-8 col-md-5 col-lg-2 m-xl-4 m-2 ">
          <img src={require('./products/summerbluedress.PNG')} className="img-fluid" alt="Floral Short Dress"/>
          <ProductCard name="Summer Blue Dress" price="100" add={this.props.add} />
          </div>

          <div className="container card col-8 col-md-5 col-lg-2 m-xl-4 m-2">
          <img src={require('./products/greenlongsleevedress.PNG')} className="img-fluid" alt="Floral Short Dress"/>
          <ProductCard name="Green Long Sleeve Dress" price="360" add={this.props.add} />
          </div>
          </div>
    </div>

    
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"><i class="fa-solid d-md-none d-lg-inline fa-arrow-left text-dark fa-2x"></i></span>
    <span className="visually-hidden">Previous</span>
    
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"><i class="fa-solid d-md-none d-lg-inline fa-arrow-right text-dark fa-2x"></i></span>
    <span className="visually-hidden">Next</span>

  </button>
</div>
        );
    }
}
 
export default DressesSlider;

