import React from 'react'
import './navbar.css'
import { Link } from 'react-scroll';
import linkdin from '../../images/linkdin.jpeg'
import git from '../../images/OIP.jpg'
const Navbar =() => {
    return(
        <nav className='navbar'>
            <Link className='desktopMenuListItem1'>Satyanarayana Reddy<span style={{color: "blue"}}> Kolagatla</span></Link>
            <div className='desktopMenu'>
                <Link className='desktopMenuListItem'>Home</Link>
                <Link className='desktopMenuListItem'>About</Link>
                <Link className='desktopMenuListItem'>Project</Link>
                <Link className='desktopMenuListItem'>Contact</Link>
            </div>
            <div className='desktopMenuBtn'>
                <Link> <img src={linkdin} alt='' className='desktopMenuImg'/></Link>
                <Link><img src={git} alt='' className='desktopMenuImg'/></Link>
                 </div>
        </nav>
    )
}
export  default Navbar