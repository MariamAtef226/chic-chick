import React from 'react';
import Header from './header';

const Contact = () => {


    return ( <div className="text-center">
        <Header />
        <div className="text-center row justify-content-center m-0 w-100">
            
            <h3 className="pt-5 mb-3 page-title fs-2 contact pe-2 ps-2">We'd be Glad to Hear from You!</h3>
            <h4 className="mb-5 contact">Send Us a Message </h4> 
            <form className="contact100-form validate-form col-8">
                <div class="wrap-input100 validate-input" data-validate="Please enter your name">
                    <input className="input100" type="text" name="name" placeholder="Full Name"/>
                    <span className="focus-input100"></span>
                </div>
                <div className="wrap-input100 validate-input" data-validate="Please enter your email: e@a.x">
                    <input className="input100" type="text" name="email" placeholder="E-mail"/>
                    <span className="focus-input100"></span>
                    </div>
                    <div className="wrap-input100 validate-input" data-validate="Please enter your phone">
                    <input className="input100" type="text" name="phone" placeholder="Phone"/>
                    <span className="focus-input100"></span>
                    </div>
                    <div className="wrap-input100 validate-input" data-validate="Please enter your message">
                    <textarea className="input100" name="message" placeholder="Your Message"></textarea>
                    <span className="focus-input100"></span>
                    </div>
                    <div className="container-contact100-form-btn">
                    <button onClick={(event)=>{event.preventDefault(); 
                alert(`Thank you for your contribution! One of our team members will contact you as soon as possible!
Be aware that we neglect any empty, incomplete, wrong-in-data or inconvenient messages`);
                        document.querySelectorAll("input, textarea").forEach((el)=>{el.value=""})}} className="contact100-form-btn">
                    <span>
                   
                        Send
                    </span>
                    </button>
                        
                    </div>
                            
                    </form>
  
                    
                    <div className='row justify-content-center get-in-touch mt-5 pt-5 pb-5 w-100'>

                        <h2 className="text-white fs-1 p-0">Get In Touch</h2>
                        <div className="address p-0 col-10 col-md-4 pt-5 text-white">
                        <i class="fa-solid fa-location-dot touch-icon fa-6x"></i>
                        <div className="fw-bold pt-4 fs-3">ADDRESS</div>
                        <div>
                            <div>
                            <div className="add-title fw-bold">Chic Chick Main Branch</div>
                            <div> 6950 S. Jordan Road<br />
                                    Centennial, CO 80112</div>
                            </div>

                            <div>
                            <div className="add-title fw-bold">Southern Colorado Office</div>
                            <div> 4474 Barnes Road <br /> Colorado Springs, CO 80917</div>
                            </div>

                            <div>
                            <div className="add-title fw-bold">Northern Colorado Office</div>
                            <div> 6775 Sherman Street,<br />
                            Loveland, CO 80538</div>
                            </div>
                        </div>
                        </div>

                        <div className="phone p-0 col-10 col-md-4 pt-5 text-white">
                        <i class="fa-solid fa-phone fa-6x touch-icon"></i>
                        <div className="fs-3 fw-bold pt-4">PHONE</div>
                        <div>
                        +2030394222 <br/>
                        +100-433-222-555<br/>
                        +2030394222 <br/>
                        +100-433-222-555<br/>
                        +2030394222 <br/>
                        +100-433-222-555<br/>

                            </div>
                        </div>

                        <div className="email p-0 col-10 col-md-4 pt-5 text-white">
                        <i class="fa-solid fa-envelope fa-6x touch-icon"></i>
                        <div className="fs-3 fw-bold pt-4">EMAIL</div>

                        <div>
                            <div className="fw-bold">Request for Proposal</div>
                            Info@wchichickdgroup.com
                            <div className="fw-bold">Employment Opportunities</div>
                            careers@wchichickdgroup.com
                            <div className="fw-bold">Bid Opportunities</div>
                            estimating@wchichickdgroup.com
                            </div>

                    </div>
                         </div> 
                    </div>
                    </div>  );
}
 
export default Contact ;