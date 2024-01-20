import React from "react";
import github from "../assets/github.svg";
import linked from "../assets/linked.svg";

function Footer() {    
    return (
        <div className="footer">
           <a href="https://github.com/AngerOverApathy"><img src={github} /></a>   
           <a href="https://www.linkedin.com/in/jess-vers/"><img src={linked} /></a>     
        </div>
    )
}

export default Footer;