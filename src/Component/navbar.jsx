import react from 'react';
import '../StyleSheet/Navbar.css';
import {Link, useNavigation} from "react-router-dom";
export default function Navbar() {
    return(
        <div className="fullPage">
          <div className="navbar">
            <ul className='nav'>
                <li className='logo' >LOGO</li>
                <li className='home' ><Link to="/home" style={{textDecoration:"none",color:"white"}}>Home</Link></li>
                <li className='exam' ><Link to="/exam" style={{textDecoration:"none",color:"white"}}>Exam</Link></li>
                <li className='about'><Link to="/about" style={{textDecoration:"none",color:"white"}}>About Us</Link></li>
                <li className='contact' ><Link to={"https://forms.gle/RDHGVPVnxrGVWqMX8"} style={{textDecoration:"none",color:"white"}}>Contact Us</Link></li>
            </ul>
            </div>
            <div className="section">
                 <div className="left-item">
                     <h2>Empowering Dreams</h2><h1>One Lesson at a Time</h1>
                     <h4>Join us in making education accessible to every child,</h4><h4> because every mind deserves the chance to grow</h4>
                 </div>
           </div>
        </div>

    )
}