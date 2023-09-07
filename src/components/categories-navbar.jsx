import React from 'react';
import { NavLink } from 'react-router-dom';

const CatNav = () => {

    function activator(el){
        let f = true;
        let main =document.querySelector(".main")
        if (el !== main )
            f= false;
        if (f===false)
            main.classList.remove("active");
        else
            main.classList.add("active");
}

let all = document.querySelectorAll(".cat-link");
all.forEach((el) =>{el.addEventListener('click', () => activator(el))});
    

    return ( 
        <div className="bg-dark text-light pt-3 mb-5">
            <h2>Browse By Category</h2>
        
        <nav className="navbar navbar-expand-lg text-bold container justify-content-evenly cat-nav ">
        <ul class="shuffle list-unstyled d-flex justify-content-evenly align-items-center mt-2 mb-2 w-75">
            <NavLink to="/chic-chick" className="cat-link m-1 main">New Arrivals</NavLink>
            <NavLink  to="top"  className="cat-link m-2 other">Tops</NavLink>
            <NavLink   to="bottom" className="cat-link m-2 other">Bottoms</NavLink>
            <NavLink   to="dress"  className="cat-link m-2 other">Dresses</NavLink>

        </ul>
    </nav>
    </div>
     );
}
 
export default CatNav;
