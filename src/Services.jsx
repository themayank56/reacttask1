import React from "react";
import Swiper from "./Swiper.jsx";

const Services = () => {
  return (
    <>
    
    <div id="banner" class="py-5">
    <div class="container">
      <div class="row">
        <div class="col-md-8 col-lg-6">
          <div class="banner-title">
            <h1 class="title">Our Services</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore, natus.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore, natus
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container section">
    <div class="row">
      <div class="col-md-12">
        <div class="section-head">
          <h1>Service</h1>
        </div>
      </div>
      
      <div class="col-md-4 ">
      <div className="card mon ">
        <div class="service-box">
          <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" class="bi bi-globe" viewBox="0 0 16 16">
            <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z"/>
          </svg>
          <h2>some heading</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, sint.</p>
        </div>
        </div>
      </div>

      <div class="col-md-4 ">
        <div className="card mon">
          <div class="service-box">
            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" class="bi bi-bar-chart-line" viewBox="0 0 16 16">
              <path d="M11 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h1V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7h1V2zm1 12h2V2h-2v12zm-3 0V7H7v7h2zm-5 0v-3H2v3h2z"/>
             </svg>
            <h2>some heading</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, sint.</p>
          </div>
        </div>
      </div>

      <div class=" col-md-4">
        <div className="card mon">
          <div class="service-box">
            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" class="bi bi-gem" viewBox="0 0 16 16">
              <path d="M3.1.7a.5.5 0 0 1 .4-.2h9a.5.5 0 0 1 .4.2l2.976 3.974c.149.185.156.45.01.644L8.4 15.3a.5.5 0 0 1-.8 0L.1 5.3a.5.5 0 0 1 0-.6l3-4zm11.386 3.785-1.806-2.41-.776 2.413 2.582-.003zm-3.633.004.961-2.989H4.186l.963 2.995 5.704-.006zM5.47 5.495 8 13.366l2.532-7.876-5.062.005zm-1.371-.999-.78-2.422-1.818 2.425 2.598-.003zM1.499 5.5l5.113 6.817-2.192-6.82L1.5 5.5zm7.889 6.817 5.123-6.83-2.928.002-2.195 6.828z"/>
            </svg>
            <h2>some heading</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, sint.</p>
          </div>
        </div>
      </div>
      
      <div class=" col-md-4">
        <div className="card mon">
          <div class="service-box">
            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" class="bi bi-camera-video-off-fill" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M10.961 12.365a1.99 1.99 0 0 0 .522-1.103l3.11 1.382A1 1 0 0 0 16 11.731V4.269a1 1 0 0 0-1.406-.913l-3.111 1.382A2 2 0 0 0 9.5 3H4.272l6.69 9.365zm-10.114-9A2.001 2.001 0 0 0 0 5v6a2 2 0 0 0 2 2h5.728L.847 3.366zm9.746 11.925-10-14 .814-.58 10 14-.814.58z"/>
            </svg>
            <h2>some heading</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, sint.</p>
          </div>
        </div>
      </div>

      <div class=" col-md-4">
        <div className="card mon">
          <div class="service-box">
            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" class="bi bi-circle-half" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 0 8 1v14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z"/>
            </svg>
            <h2>some heading</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, sint.</p>
          </div>
        </div>
      </div>

      <div class=" col-md-4">
        <div className="card mon">
          <div class="service-box">
            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"   fill="currentColor" class="bi bi-cpu-fill" viewBox="0 0 16 16">
                <path d="M6.5 6a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z"/>
                <path d="M5.5.5a.5.5 0 0 0-1 0V2A2.5 2.5 0 0 0 2 4.5H.5a.5.5 0 0 0 0 1H2v1H.5a.5.5 0 0 0 0 1H2v1H.5a.5.5 0 0 0 0 1H2v1H.5a.5.5 0 0 0 0 1H2A2.5 2.5 0 0 0 4.5 14v1.5a.5.5 0 0 0 1 0V14h1v1.5a.5.5 0 0 0 1 0V14h1v1.5a.5.5 0 0 0 1 0V14h1v1.5a.5.5 0 0 0 1 0V14a2.5 2.5 0 0 0 2.5-2.5h1.5a.5.5 0 0 0 0-1H14v-1h1.5a.5.5 0 0 0 0-1H14v-1h1.5a.5.5 0 0 0 0-1H14v-1h1.5a.5.5 0 0 0 0-1H14A2.5 2.5 0 0 0 11.5 2V.5a.5.5 0 0 0-1 0V2h-1V.5a.5.5 0 0 0-1 0V2h-1V.5a.5.5 0 0 0-1 0V2h-1V.5zm1 4.5h3A1.5 1.5 0 0 1 11 6.5v3A1.5 1.5 0 0 1 9.5 11h-3A1.5 1.5 0 0 1 5 9.5v-3A1.5 1.5 0 0 1 6.5 5z"/>
            </svg>
            <h2>some heading</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, sint.</p>
          </div>
        </div>
      </div>
      
      <div class=" col-md-4">
        <div className="card mon">
          <div class="service-box">
            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" class="bi bi-badge-vr-fill" viewBox="0 0 16 16">
              <path d="M9.673 5.933v1.938h1.033c.66 0 1.068-.316 1.068-.95 0-.64-.422-.988-1.05-.988h-1.05z"/>
              <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm5.937 7 1.99-5.999H6.61L5.277 9.708H5.22L3.875 5.001H2.5L4.508 11h1.429zM8.5 5.001V11h1.173V8.763h1.064L11.787 11h1.327L11.91 8.583C12.455 8.373 13 7.779 13 6.9c0-1.147-.773-1.9-2.105-1.9H8.5z"/>
            </svg>
            <h2>some heading</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, sint.</p>
          </div>
        </div>
      </div>

      <div class=" col-md-4">
        <div className="card mon">
          <div class="service-box">
            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" class="bi bi-archive-fill" viewBox="0 0 16 16">
              <path d="M12.643 15C13.979 15 15 13.845 15 12.5V5H1v7.5C1 13.845 2.021 15 3.357 15h9.286zM5.5 7h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1zM.8 1a.8.8 0 0 0-.8.8V3a.8.8 0 0 0 .8.8h14.4A.8.8 0 0 0 16 3V1.8a.8.8 0 0 0-.8-.8H.8z"/>
            </svg>
            <h2>some heading</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, sint.</p>
          </div>
        </div>
      </div>

      <div class=" col-md-4">
        <div className="card mon">
          <div class="service-box">
            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" class="bi bi-front" viewBox="0 0 16 16">
              <path d="M0 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2H2a2 2 0 0 1-2-2V2zm5 10v2a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2v5a2 2 0 0 1-2 2H5z"/>
            </svg>
            <h2>some heading</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, sint.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container" id="swiper">
    <div class="row">
      <div className="card">
        <div class="col-xl-12 col-md-12 col-lg-12">
          <Swiper />
        </div>
      </div>
    </div>
  </div>
  </>
  );
};

export default Services;