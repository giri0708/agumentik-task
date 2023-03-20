import React from "react";
import '../component/sheets/sheets1.css';
import logo from '../component/sheets/pics.png';
import logo2 from '../component/sheets/smallpic.png';
import logo3 from '../component/sheets/tro.png';
import fb from '../component/sheets/fb.png';
import inst from '../component/sheets/inst.png';
import linkedin from '../component/sheets/in.png';
class Home extends React.Component{
    render(){
        return(
        <div> 
           <div className="header"></div>
           <div className="mid">
            <div className="title">CA.TECH</div>
            <div className="bubble"></div>
            <div className="bubble2"></div>
            <div className="bubble3"></div>
            <div className="we">We are <br></br>skilled in</div> 
            <div className="design">design</div>
            <div className="and">and</div>
            <div className="dev">development</div>
            <div className="bigbubble"><img src={logo} className="img" alt="loading" height="250px" width="250px"/></div>
            <div className="smallbubble"><img src={logo2} className="img2" alt="loading" height="50px" width="50px"/></div>
            <div className="smallbubble2"><img src={logo} className="img3" alt="loading" height="50px" width="50px"/></div>
            <div className="trojan"><img src={logo3} className="img4" alt="loading" height="50px" width="50px"/></div>
            <div className="digi">We make digital <br></br> products.</div>
            <p className="digi2">web develop strong relationship with <br></br> our clients and specialist companies
             <br></br>offering discounted price
             <br></br> <br></br>see all features
             </p>
             <div className="line1"></div>
              <div className="bubble4"></div>
              <div className="circle"></div>
              <div className="line2"></div>
              <div className="bubble5"></div>
             <button class="play-button" id="btn"></button>
             <p className="vid">watch <br></br> video</p>
             <p class="vertical-text">Scroll down</p>
           </div>
           <div className="side"></div>
           <div className="side2"></div>
           <footer>
  <ul class="social-icons">
    <li><a href="https://www.facebook.com"><img src={fb} alt="Facebook"/></a></li>
    <li><a href="https://www.linkedin.com"><img src={linkedin} alt="LinkedIn"/></a></li>
    <li><a href="https://www.instagram.com"><img src={inst} alt="Instagram"/></a></li>
  </ul>
</footer>

        </div>
        )
    }
}
export default Home;
