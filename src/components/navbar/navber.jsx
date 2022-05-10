import React from 'react'
import "./navber.css"
// import "../../App.css"
function Navbar() {
  return (
    <div className = "n-wrapper">
        <div className="n-left">
            <div className="n-name">Front-End</div>
            <span>Toggle</span>
        </div>
        <div className="n-right">
            <div className="n-list">
                <ul style={{listStyleType : 'none'}}>
                    <li>Home</li>
                    <li>About Me</li>
                    <li>Project</li>                    
                </ul>
            </div>
        </div>
    </div>
  );
}
export default Navbar;
