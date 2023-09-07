import React from 'react';
import Header from './header';
import CatNav from './categories-navbar';

import {Outlet} from 'react-router-dom'


const Home = (props) => {
    return ( <React.Fragment>
        <div  className="row big-grid text-center justify-content-center m-0 me-auto ms-auto">
                <Header />
                <img className="w-100 p-0 m-0" src="http://thefinestmagazine.com/wp-content/uploads/2020/11/The-Finest-Magazine-Ann-Taylor-feature2.jpg" alt="6 stylish women"/>
                <CatNav />
        </div>
        <Outlet />


        </React.Fragment>
        );
}


 
export default Home;
