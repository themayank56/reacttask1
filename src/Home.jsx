import React from "react";
import Swiper from "./Swiper.jsx";
import web0 from "../src/images/home_image.jpg";
import web1 from "../src/images/rimg-1.PNG";
import web2 from "../src/images/rimg-2.PNG";
import web3 from "../src/images/rimg-33.PNG";
import web4 from "../src/images/rimg-4.PNG";
import web5 from "../src/images/rimg-5.PNG";
import web6 from "../src/images/rimg-6.PNG";
import web7 from "../src/images/bil.jpg";
import web8 from "../src/images/stev.jpg";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  return (
    <>
        <div className="container-fluid" >
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row ">
                <div className="col-xl-6 col-md-auto col-sm-auto ">
                  <h3 className="welcome">Welcome to</h3>
                  <h1 className="head1 section-head">Website_name</h1>
                  <h3 className="head2">We design a road map towards the success of your Businessin this Digital World </h3>
                </div>
                  <div className="col-xl-6 col-md-auto home_header_img inner" id="nav_bg">
                  <img src={web0} className="img-fluid animated" alt="Home page" />
                  </div>
              </div>
            </div>
          </div>
        </div>
        
        <div id="home_swiper">
        <div class="container" id="swiper">
          <div className="section-head">
            <h1 className="select_project">Gallery</h1>
          </div>
          <div class="row">
            <div className="card">
              <div class="col-xl-12 col-md-12       col-lg-12">
                <Swiper />
              </div>
            </div>
          </div>
        </div>
        </div>

        

        
        <div className="container section">
          <div className="section-head">
            <h1 className="select_project">Select Project</h1>
          </div>
          <div className="row" id="project_name">
            <div className="col-xl-4 col-md-6 col-sm-12">
              <div className="card card-margin">
                <div className="inner">
                  <img src={web1} class="card-img-top" alt="Img 1" />
                </div>
                <div className="card-body section-head">
                  <h1 className="card-title">Dorsia</h1>
                  <a  className="nav-link" href="#">Product, Marketing</a>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-md-6 col-sm-12">
              <div className="card card-margin">
                <div className="inner">
                  <img src={web2} class="card-img-top" alt="Img 1" />
                </div>
                  <div className="card-body section-head">
                    <h1 className="card-title">News App</h1>
                    <a  className="nav-link" href="#">Branding, Product</a>
                  </div>
              </div>
            </div>
            <div class="col-xl-4 col-md-6 col-sm-12">
              <div className="card card-margin">
                <div className="inner">
                  <img src={web3} class="card-img-top" alt="Img 1" />
                </div>
                  <div className="card-body section-head">
                    <h1 className="card-title">Zero</h1>
                    <a  className="nav-link" href="#">Marketing, product</a>
                  </div>
              </div>
            </div>
            <div class="col-xl-4 col-md-6 col-sm-12">
              <div className="card card-margin">
                <div className="inner">
                  <img src={web4} class="card-img-top" alt="Img 1" />
                </div>
                  <div className="card-body section-head">
                    <h1 className="card-title">Clear Motion</h1>
                    <a  className="nav-link" href="#">Branding, Marketing</a>
                  </div>
              </div>
            </div>
            <div class="col-xl-4 col-md-6 col-sm-12">
              <div className="card card-margin">
                <div className="inner">
                  <img src={web5} class="card-img-top" alt="Img 1" />
                </div>
                  <div className="card-body section-head">
                    <h1 className="card-title">RedBull TV</h1>
                    <a  className="nav-link" href="#">Product, Marketing</a>
                  </div>
              </div>
            </div>
            <div class="col-xl-4 col-md-6 col-sm-12">
              <div className="card card-margin">
                <div className="inner">
                  <img src={web6} class="card-img-top" alt="Img 1" />
                </div>
                  <div className="card-body section-head">
                    <h1 className="card-title">Copper</h1>
                    <a  className="nav-link" href="#">Design, Product</a>
                  </div>
              </div>
            </div>
          </div>
        </div>

  <div id="testimonial" class="section">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
        <div class="section-head1">
          <h1> Testimonial</h1>
        </div>
        </div>
        <div class="col-md-6"> 
          <div class="testimonial">
            <p className="textt">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, sint?</p>
              <div className="found">
                <img src={web7} alt="" />
              </div>
            <div className="text1">Bill gate</div>
            <div className="text1">Microsoft</div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="testimonial">
            <p className="textt">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, sint?</p>
              <div className="found">
                <img src={web8} alt="" />
              </div>
            <div className="text1">Steve Jobs</div>
            <div className="text1">Apple</div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div id="footer-sidebar">
    <div class="container section">
      <div class="row">
        <div className="col-md-12">
        <div className="row">   
        <div class="col-md-12">
          <div class="card">
            <div class="card-body section-head">
              <h1 class="card-title"> News</h1>
                <div className="container" id="news">
                  <div className="row">
                    <div className="col-xl-6  col-sm-12">
                    <h2>Sport Section</h2>
                      <div className="card">
                        <p className="card-text">
                          <a href="">Lorem, ipsum dolor.</a><br /><br />
                          <a href="">Lorem, ipsum dolor.</a><br /><br />
                          <a href="">Lorem, ipsum dolor.</a><br /><br />
                          <a href="">Lorem, ipsum dolor.</a><br /><br />
                          <a href="">Lorem, ipsum dolor.</a><br /><br />
                        </p>
                      </div>
                    </div>
                    <div className="col-xl-6 col-sm-12" >
                    <h2>Finence Section</h2>
                      <div className="card">
                        <p class="card-text">
                          <a href="">Lorem, ipsum dolor.</a><br /><br />
                          <a href="">Lorem, ipsum dolor.</a><br /><br />
                          <a href="">Lorem, ipsum dolor.</a><br /><br />
                          <a href="">Lorem, ipsum dolor.</a><br /><br />
                          <a href="">Lorem, ipsum dolor.</a><br /><br />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
        </div>
        </div>
      </div>
    </div>
  </div>
    </>
  );
};

export default Home;