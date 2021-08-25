import React from 'react';
import company_logo from "../src/images/company_logo.jpg";
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
  <>
    <div className="max">
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-12  mx-auto max">
            <div id="nav">
              <nav className="navbar navbar-expand-lg navbar-mainbg">
                <div className="col-xl-2  col-sm-6">
                  <div id="logo">
                    <img src={company_logo} className="img-fluid animated" alt="Home page" />
                  </div>
                </div>
                <button  
                  className="navbar-toggler" 
                  type="button"    
                  data-toggle="collapse" 
                  data-target="#navbarSupportedContent" 
                  aria-controls="navbarSupportedContent" 
                  aria-expanded="false" 
                  aria-label="Toggle navigation">
                  <i className="bi bi-bricks"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <div className="container">

                </div>
                  <ul className="navbar-nav  ">
                    <div className="hori-selector">
                      <div className="left"></div>
                      <div className="rigth"></div>
                    </div>
                    <li className="nav-item active">
                      <NavLink activeClassName="menu_active" className="nav-link" to="/" exact>
                      <div id="menu_item">
                        Home
                      </div>
                      </NavLink>
                    </li>
                    <li className="nav-item active">
                      <NavLink activeClassName="menu_active" className="nav-link" to="/about" exact>
                      <div id="menu_item">
                        About
                      </div>
                      </NavLink>
                    </li>
                    <li className="nav-item active">
                      <NavLink activeClassName="menu_active" className="nav-link" to="/services" exact>
                      <div id="menu_item">
                        Services
                      </div>
                      </NavLink>
                    </li>
                    <li className="nav-item active">
                      <NavLink activeClassName="menu_active" className="nav-link" to="/contect" exact>
                      <div id="menu_item">
                        Contect
                      </div>
                      </NavLink>
                    </li>
                    
                  </ul>
                  
                
                </div>
              </nav> 
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  );
};

export default Navbar;