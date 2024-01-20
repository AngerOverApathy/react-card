import React from 'react';
import '../App.css'
import pic01 from '../assets/pic01.jpg';


function Header() {
  return (
    <div className='headshot'>
      <img src={pic01} alt="head shot" className='pic'/>
    </div>
  );
}


export default Header;