import React from "react";

function MainContent() {    
    return (
        <div className="main-content">
            <div className="title">
                <h1>Jessica Versoza</h1>
                <h3>Software Developer</h3>
                <a href="https://vsza-tech.netlify.app/"><p>vsza-tech.netlify.com</p></a>
                <button className="email"><a href="mailto:jfverse@gmail.com">Email</a></button>
            </div>
            <div className="left-align">
                <h3>About</h3>
                <p>I am a passionate software engineer, skilled in transforming innovative ideas into user-friendly applications.  As a lifelong learner, I stay updated with the latest industry trends and technologies, making me a valuable asset to any development team.</p>
                <br />
                <h3>Interests</h3>
                <p>Foodie. Dancer. Reader. Adventurer. Coffee addict. Travel nerd. Full-time dog mom.</p>
            </div>
        </div>
    )
}

export default MainContent;