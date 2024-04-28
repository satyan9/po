import React from "react";
import './skills.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { FaReact } from "react-icons/fa";


import { SiMysql } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";

import { SiNumpy } from "react-icons/si";
import { SiPandas } from "react-icons/si";
import { SiTensorflow } from "react-icons/si";
import { FaGithub } from "react-icons/fa";

const Skills = () => {
    return(
        <section id="skill">
            
        <span className="skilltitle" > Hello, I'm <span style={{color: "blue"}}>Satya</span><br></br>
I'm a <span style={{color: "blue"}}>FullStack Developer</span> with a <br></br>passion for <span style={{color: "blue"}}>Cloud Computing. </span>
                </span>
               
                <span className="skilldesc">
                I pursuing graduation from SSBT, COET, JALGAON (425001). Most of
                  my experience is in full stack web development and problem
                  solving. Check out some of my work<br></br>
                  In my free time, I love to learn new technologies and keep
                  up-to-date with full stack developement. Outside of programming, I
                  love to read novels and watch animes. I learnt alot things from
                  anime. My one of the most favourite character is Itachi Uchiha.
                </span>
                
            <p >Skills</p>
            <div className="skillsbars">
                <div className="skillbar"><span className="set">Backend</span>
                    <div className="skillbarpoints">
                       <ul>
                        <li><FaPython size="40px" />Python</li>
                        <li><FaNode size="40px" />Node</li>
                        <li><SiMysql size="40px" />Mysql</li>
                        <li><FaBootstrap size="40px" />Bootstrap</li>
                        </ul> 
                    </div>
                </div>
                <div className="skillbar"><span className="set">Frontend</span>
                    <div className="skillbarpoints">
                    <ul>
                        <li><FaReact size="40px" />React</li>
                        <li><FaHtml5 size="40px" />Html5</li>
                        <li><FaCss3Alt size="40px" />Css</li>
                        </ul>
                    </div>
                </div>
                <div className="skillbar"><span className="set">Data Science</span>
                    <div className="skillbarpoints">
                    <ul>
                        <li><SiTensorflow size="40px" />Tensorflow</li>
                        <li><SiNumpy size="40px" />Numpy</li>
                        <li><SiPandas size="40px" />Pandas</li>
                        </ul>
                    </div>
                </div>
                <div className="skillbar"><span className="set">Other</span>
                    <div className="skillbarpoints">
                    <ul>
                        <li><FaGithub size="40px" />Github</li>
                        <li>C</li>
                        <li>C++</li>
                        <li>Java</li>
                        </ul>
                    </div>
                </div>
            </div>
      
      </section>
  );
};
    

export default Skills