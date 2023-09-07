import React from 'react';
import Header from './header';


const About = () => {
    return ( <div className='text-center about-outer'>
        <Header />
        <div className="text-center about">
            
            <h1 className="pt-5 mb-3 page-title">About us</h1>
            <div className='row m-0 justify-content-center align-items-center flex-column flex-lg-row justify-content-lg-evenly pb-lg-5 align-items-lg-center w-100'>
            <div className="col-lg-5">

            <p> <i> Chic Chick </i> is a online retail store. It was founded in 2019 by Linda Bell and Sally Kelson. 
            It ships all over the world; starting from west-coast of the US, reaching China. 
            We offer you high quality pieces from the best brands from all over the world.</p>
            <p className="d-none d-lg-block">No traveling hassle…no rushing…just happy shopping from your home! We can provide you the power of easy search through the various styles and collections of our products.
            </p>
            <p> Shop at your convenience and we will deliver in the least possible time.</p>
            <p className="text-dark"><i >Chic Chick</i> family!</p>
            </div>

            <div className='col-lg-4 p-0'><img alt="model" src="https://images.pexels.com/photos/2584269/pexels-photo-2584269.jpeg?cs=srgb&dl=pexels-ali-pazani-2584269.jpg&fm=jpg" className="img-fluid "/></div>
            </div>

            </div>


            <div id="team" class="team text-center pt-5 pb-5">
<h1 className="pt-5 mb-5 team-title">Meet Our Team</h1>

    <div class="row justify-content-center">
      <div class="col-lg-3 d-flex col-md-6 justify-content-center mb-3">
        <div class="labelcard">
        <img class="img-fluid" alt="Benson, Main Branch Manager" src="https://assets.teenvogue.com/photos/5a34024d6d49e31579585aed/master/pass/GettyImages-692742974.jpg"/>
        <h4 class="pb-3 pt-3">Ashley Benson</h4>
        <p class="ps-2 pe-2">Main Branch Manager
        </p>
          </div>
        </div>

        <div class="col-lg-3 col-md-6 d-flex justify-content-center mb-3">
          <div class="labelcard">
          <img class="img-fluid" alt="Henrie, Sales Manager" src="https://tv-fanatic-res.cloudinary.com/iu/s--CSe5Z358--/t_full/cs_srgb,f_auto,fl_strip_profile.lossy,q_auto:420/v1535735922/blake-jenner-attends-sxsw.jpg"/>
          <h4 class="pb-3 pt-3">David Henrie</h4>
          <p class="ps-2 pe-2">Sales Manager
          </p>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 d-flex justify-content-center mb-3">
            <div class="labelcard">
            <img class="img-fluid" alt="Kane, HR" src="https://i.pinimg.com/originals/ab/4b/39/ab4b39539dfb4be0dd527126ce028a86.jpg"/>
            <h4 class="pb-3 pt-3">Chelsea Kane</h4>
            <p class="ps-2 pe-2">Human Resources
            </p>
              </div>
            </div>

            <div class="col-lg-3 col-md-6  d-flex justify-content-center mb-3">
              <div class="labelcard">
              <img class="img-fluid" alt="Tisdale, Customer Service" src="https://th.bing.com/th/id/R.376a0c5cbb6653c3b4bc6bc478845a89?rik=CkcF9FCHKPWeDA&pid=ImgRaw&r=0"/>
              <h4 class="pb-3 pt-3">Ashley Tisdale</h4>
              <p class="ps-2 pe-2">Customer Service
              </p>
                </div>
              </div>
      </div>
    </div>


            <div id="vision" class="vision text-center pb-5 pt-5">
                <div class="container">
                <h1 className="pt-5 mb-5 page-title">Our Vision</h1>
         
                 <div class="row justify-content-center">

    <div class="box col-md-6 col-lg-3 position-relative p-3 m-lg-0">
        <i class="bgicon fa-solid fa-wand-magic-sparkles position-absolute fa-7x"></i>
        <h3>Latest Trends</h3>
        <p>Bringing you the latest fashion trends at high quality and great diversity, to suit all of your tastes.</p>
      </div>

      <div class="box col-md-6 col-lg-3 position-relative p-3  m-lg-0">
        <i class="bgicon fa-solid fa-dollar-sign position-absolute fa-7x"></i>
        <h3>Best Prices</h3>
        <p>Delivering unique products for very humble and resonable prices yet at best quality, because that's what you deserve.</p>
      </div>

      <div class="box col-md-6 col-lg-3 position-relative p-3 m-lg-0">
        <i class="bgicon fa-regular fa-clock position-absolute fa-7x"></i>
        <h3>Fast Delivery</h3>
        <p>Receive your orders within less than a week, because we know how much time and speed means to you.</p>
      </div>


      <div class="box col-md-6 col-lg-3 position-relative p-3 m-lg-0">
        <i class="bgicon fa-solid fa-hand-holding-heart position-absolute fa-7x"></i>
        <h3>With Love</h3>
        <p>Caring about our clients' satisfaction is our priority. We bring you the best pieces with passion and love.</p>
    </div>
    </div>

  </div>
</div>


       
    </div>);
}
 
export default About;