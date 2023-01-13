import React, { Component } from 'react';
import logo from './libel.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import './App.css';
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import icon1 from './icon1.png';
import icon2 from './icon2.png';
import icon3 from './icon3.png';

class App extends Component {
  render() {
    const buttons = ['Home', 'About', 'Services', 'Pricing', 'Products', 'News'];
    return (
      <div>
        <header className="gray-background section-container">
          <div className="social-container">
              <button className="blue-text">
                +1 212 946 2700
              </button>
              <button className="b-button">
                Help Desk
              </button>
              <button className="b-button">
                Why Sway
              </button>
              <li className="redes-icon">
                <a className="face" href="#"> <FontAwesomeIcon icon={faFacebook} size="1mm" style={{ color: 'gray' }}/> </a>
                <a className="tw" href="#"> <FontAwesomeIcon icon={faTwitter} size="1x" style={{ color: 'gray' }}/> </a>
                <a className="ins" href="#"> <FontAwesomeIcon icon={faInstagram} size="1x" style={{ color: 'gray' }}/> </a>
              </li> 
          </div>

          <hr></hr>

          <div className='logo-b'>
            <div className='logo-a'>
              <img width="120" src={logo} alt="Logo" />
            </div>
            <div className='logo-a'>
              {buttons.map((button, index) => (
                  <button className="transparent-button" key={index}>{button}</button>
              ))}
              <button className="icon-button">
                <FaShoppingCart />
              </button>
              <button className="icon-button">
                <FaSearch />
              </button>
              <button className="blue-button">
                Agregar
              </button>
            </div>

          </div>
        </header>
        <section className="gray-background section-container">
          <div className="section-box-a  espacio-a" >
            <button className="blue-button">
              Welcome to Sway
            </button>
            <button className="blue-button">
              Your partner for mobile and web products
            </button>
            <h1>We create digital experiences</h1>
            <p>
              We have the kno.vledge expertise in design and modern programming languages and plat'orms to help Startups and growing companies build successful products.
            </p>
            <button className="blue-button-a">
              Get Started
            </button>
            <button className="blue-button">
              Watch Out Reel
            </button>
          </div>
          <div className="section-box-a">
            <video src="https://carontestudio.com/img/f4.mp4" width="340" height="360" autoplay="true" muted="true" loop="true" poster="https://carontestudio.com/img/contacto.jpg"></video>
          </div>
        </section>

        <section className="section-container">
          <div className="social-container-a">
            <h1>Crafting effective design and UX design</h1>
            <p>
            We are a customer-first eCommerce agency, combining the best of UX design, 
            technology and analytics to create sites that shoppers love and retention tactics that keep them coming back 
            </p>
          </div>
            
            <div className="section-box-b" >
              <img src={icon1} alt="icon1" width="30" height="30"/>
              <h1>Branding</h1>
              <p> We create effective action plans and design optimal business strategies  </p>
              <button className="blue-button">
                Learn More
              </button>
            </div>
            <div className="section-box-b">
              <img src={icon2} alt="icon2" width="30" height="30"/>
              <h1>Development</h1>
              <p> We create effective action plans and design optimal business strategies </p>
              <button className="blue-button">
                Learn More
              </button>
            </div>
            <div className="section-box-b">
              <img src={icon3} alt="icon3" width="30" height="30"/>
              <h1>Strategy</h1>
              <p> We create effective action plans and design optimal business strategies </p>
              <button className="blue-button">
                Learn More
              </button>
            </div>
        </section>

        <section className="gray-background section-container">
          <div className="section-box-a">
            <video src="https://carontestudio.com/img/f4.mp4" width="340" height="360" autoplay="true" muted="true" loop="true" poster="https://carontestudio.com/img/contacto.jpg"></video>
          </div>
          <div className="section-box-a">
            <p className='text-blue'> SUCCESSFUL CREATIVE IS ROOTED IN STRATEGY  </p>
            <h1>We partner with companies to bring clarity to their brand </h1>
            <p> We develop enjoyable consumer experiences, from digital strategy and content to media and analysis. Leading to meaningful results and satisfied clients.  </p>
            <button className="blue-button-a">
              Learn More
            </button>
          </div>        
        </section>
      </div>
    );
  }
}

export default App;