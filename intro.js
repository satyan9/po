import React from "react";
import './intro.css';
import { Link } from 'react-scroll';



const Intro = () => {
    return (
        <section id="intro">
            <div className="introcontent">
                <span className="name">SATYANARAYAN REDDY KOLAGATLA</span>
                <span className="s2">  FullStack Developer</span>
                <span className="s3"> Web Developer, Database Administrator and API Developer</span>
               <Link><button className="Btn">Resume</button></Link>
            </div>
        </section>
    )
}
export default Intro;