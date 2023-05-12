import React from "react";
import { NavLink,Link } from "react-router-dom";
import '../../Landingpage/index.css'
import img1 from '../../assets/img1.png'
import hero from '../../assets/hero-img.png'

const Home = () => {
  return (
    <>
 <header id="header" className="fixed-top">
        <div className="main">
          <h1 className="logo"><a><img src={img1}/></a></h1>
        </div>
        <nav id="navbar" className="navbar">
          <ul>
            <li className="nav-Link" id="#home">
              <NavLink to="/">Home</NavLink>
            </li>
            {/* <li className="nav-link" id="about">
              <NavLink to="/about">About</NavLink>
            </li> */}
            <li className="nav-link" id="workflow">
              <NavLink to="/workflow">Workflow</NavLink>
            </li>
            <li className="nav-link" id="activities">
              <NavLink to="/activities">Activities</NavLink>
            </li>
            <li className="nav-link" id="#team">
              <NavLink to="/team">Team</NavLink>
            </li>
            {/* <li className="nav-link" id="contact">
              <NavLink to="/contact">Contact</NavLink>
            </li> */}
            <li>
            <Link className="getstarted scrollto">Get Started</Link>
          </li>
          </ul>
        </nav>
      </header>
      <section id="hero" class="d-flex align-items-center">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
          <h1>Together,let's build a <span>Sustainable </span>and <span>Green Future</span></h1>
          <h2>
           Sustainability is the way to our future - Prakruthi Suraksha is the way forward.
          </h2>
          <div class="d-flex">
            <a href="#about" class="btn-get-started scrollto">About</a>
            <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" class="glightbox btn-watch-video"><i
                class="bi bi-play-circle"></i><span>Contact</span></a>
          </div>
        </div>
        <div class="col-lg-6 order-1 order-lg-2 hero-img">
          <img src={hero} class="img-fluid animated" alt="" />
        </div>
      </div>
    </div>
  </section>
    </>
  );
};

export default Home;
