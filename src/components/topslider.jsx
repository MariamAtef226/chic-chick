import React, { Component } from 'react';
import ProductCard from './prod-card';

class TopsSlider extends Component {
    render() { 
 
        return (
            <div id="carouselExampleIndicators" className="carousel slide" >
                <h2 className="text-center fw-bold">Tops</h2>
                <div className="carousel-indicators bg-dark">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>

  <div className="carousel-inner p-5 pt-3 mb-5 text-center">
    <div className="carousel-item active">
      <div className="row justify-content-xl-center justify-content-lg-around justify-content-md-center justify-content-center">
          
          <div className="container card col-8 col-md-5 col-lg-2 m-xl-4 m-2">
          <img src={require('./products/dottedchiffonblouse.PNG')} className="img-fluid" alt="Floral Short Dress"/>
          <ProductCard name="Dotted Chiffon Blouse" price="200" add={this.props.add}/>
          </div>

          <div className="container card col-8 col-md-5 col-lg-2 m-xl-4 m-2">
          <img src={require('./products/greenfloralblouse.PNG')} className="img-fluid" alt="Floral Short Dress"/>
          <ProductCard name="Green Floral Blouse" price="250" add={this.props.add}/>
          </div>
 
          <div className="container card col-8 col-md-5 col-lg-2 m-xl-4 m-2">
          <img src={require('./products/whitecottonblouse.PNG')} className="img-fluid" alt="Floral Short Dress"/>
          <ProductCard name="White Cotton Blouse" price="250" add={this.props.add}/>
          </div> 

          <div className="container card col-8 col-md-5 col-lg-2 m-xl-4 m-2">
          <img src={require('./products/whitecottonchemise.PNG')} className="img-fluid" alt="Floral Short Dress"/>
          <ProductCard name="White Cotton Chemise" price="200" add={this.props.add}/>
          </div>
      </div>
    </div>
    <div className="carousel-item">
    <div className="row justify-content-xl-center justify-content-lg-around justify-content-md-evenly justify-content-center">
          <div className="container card col-8 col-md-5 col-lg-2 m-xl-4 m-2">
          <img src={require('./products/greysweatshirt.PNG')} className="img-fluid" alt="Floral Short Dress"/>
          <ProductCard name="Grey Sweat Shirt" price="400" add={this.props.add}/>
          </div> 
          <div className="container card col-8 col-md-5 col-lg-2 m-xl-4 m-2">
          <img src={require('./products/denimjacketshort.PNG')} className="img-fluid" alt="Floral Short Dress"/>
          <ProductCard name="Denim Jacket - short" price="600" add={this.props.add}/>
          </div>

          <div className="container card col-8 col-md-5 col-lg-2 m-xl-4 m-2 ">
          <img src={require('./products/tanktop.PNG')} className="img-fluid" alt="Floral Short Dress"/>
          <ProductCard name="Tank Top" price="100" add={this.props.add}/>
          </div>

          <div className="container card col-8 col-md-5 col-lg-2 m-xl-4 m-2">
          <img src={require('./products/basicgreencroptop.PNG')} className="img-fluid" alt="Floral Short Dress"/>
          <ProductCard name="Basic Green crop Top" price="360"add={this.props.add} />
          </div>
          </div>
    </div>

    <div className="carousel-item">
    <div className="row justify-content-xl-center justify-content-lg-around justify-content-md-evenly justify-content-center">
          <div className="container card col-8 col-md-5 col-lg-2 m-xl-4 m-2">
          <img src={require('./products/violetchiffonchemise.PNG')} className="img-fluid" alt="Floral Short Dress"/>
          <ProductCard name="Violet Chiffon Chemise" price="500" />
          </div> 
          <div className="container card col-8 col-md-5 col-lg-2 m-xl-4 m-2">
          <img src={require('./products/stripesgreenshirt.PNG')} className="img-fluid" alt="Floral Short Dress"/>
          <ProductCard name="Stripes Green Shirt" price="600" add={this.props.add} />
          </div>

          <div className="container card col-8 col-md-5 col-lg-2 m-xl-4 m-2 ">
          <img src={require('./products/sportstanktop.PNG')} className="img-fluid" alt="Floral Short Dress"/>
          <ProductCard name="Sports Tank Top" price="100" add={this.props.add} />
          </div>

          <div className="container card col-8 col-md-5 col-lg-2 m-xl-4 m-2">
          <img src={require('./products/blackleatherjacket.PNG')} className="img-fluid" alt="Floral Short Dress"/>
          <ProductCard name="Black Leather Jacket" price="500" add={this.props.add}/>
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
 
export default TopsSlider;

