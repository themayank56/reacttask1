import React,{useState} from "react";
import web7 from "../src/images/bil.jpg";
import web8 from "../src/images/stev.jpg";

const Contect = () => {
  const [data, setData] = useState({
    FullName:"",
    Phone:"",
    Email:"",
    msg:""
  });
  const InputEvent = (event) =>{
    const {name, value} = event.target;
    setData((preVal) =>{
      return{
        ...preVal,
        [name] : value,
      }
    })
  };
  const formSubmit= (e) =>{
    e.preventDefault();
    alert(
      `My Name is: ${data.FullName}. My mobile number is: ${data.Phone}. My email is: ${data.Email} and my message is :${data.msg}`
    );

  };
  return (
  <>
      <div className="container" id="btn_center">
        <div className="row">
          <div className="col-12">
            <div className="container">
              <div className="row">
                <div className="col-12 contect_us section-head">
                  <h1>Contect us</h1>
                  <h3>We are just few step away to help you grow in this digital world</h3>  
                </div>
              </div>
            </div>
            <div className="container" id="login_part">
            <div className="row">
              <div className="col-xl-8 col-md-11 col-sm-11 mx-auto shadow">
                <div className="card">
                <form onSubmit={formSubmit}>
                <div className="mb-3">
                  <label for="validationCustom01" class="form-label">
                    <div className="login_name">
                      FullName
                    </div>
                  </label>
                  <input type="text" class="form-control" id="validationCustom01" 
                  name="FullName"
                  value={data.FullName}
                  onChange={InputEvent}
                  placeholder="Enter Your Name" />
                  </div>
                  <div className="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">
                    <div className="login_name">
                      Phone
                    </div>
                    </label>
                    <input type="phone" class="form-control" id="exampleFormControlInput1"
                    name="Phone"
                    value={data.Phone}
                    onChange={InputEvent}  
                    placeholder="Mobile number" />
                  </div>
                  <div className="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">
                    <div className="login_name">
                      Email
                    </div> 
                    </label>
                    <input type="email" class="form-control" id="exampleFormControlInput1"
                      name="Email"
                      value={data.Email}
                      onChange={InputEvent}  
                      placeholder="Mayank@gmail.com" 
                      />
                  </div>
                  <div className="mb-3 outline">
                    <label for="exampleFormControlTextarea1" class="form-label">
                    <div className="login_name">
                      Message
                    </div> 
                    </label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" 
                    name="msg"
                    value={data.Message}
                    onChange={InputEvent}  
                    rows="3"></textarea>
                  </div>
                  <div className="col-12  button_center">
                    <button className="btn btn-outline-primary" type="submit">
                      <div className="submit_btn">
                        Submit Form
                      </div> 
                    </button>
                  </div>
                </form>
                </div>
              </div>
            </div>
          </div>
            <div className="container">
              <div className="row">
                <div className="col-xl-6 col-md-12 section22" id="contect_part">
                  <div className="card mon ">
                    <div className ="service-box">
                      <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60"  fill="currentColor"     className="bi bi-geo-alt" viewBox="0 0 16 16">
                      <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
                      <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                      </svg>
                    <h1 className="section-head">Our Address</h1>
                      <h3>
                      <strong>
                        555 noida, sec-76
                        Utter Pradesh
                        </strong>
                      </h3> 
                    </div>
                  </div>  
                </div>
                
                <div className="col-xl-6 col-md-12 section22" id="contect_part">
                  <div className="card mon ">
                    <div class="service-box">
                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" className="bi bi-telephone-inbound" viewBox="0 0 16 16">
                    <path d="M15.854.146a.5.5 0 0 1 0 .708L11.707 5H14.5a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 1 0v2.793L15.146.146a.5.5 0 0 1 .708 0zm-12.2 1.182a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                    </svg>
                    <div className="Email_us">
                      <h1>Call Us</h1> 
                      <h5><strong>P:(123) 444-555-666</strong></h5>
                    </div>
                    </div>
                  </div> 
                </div>
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
              <h1>FOUNDER</h1>
            </div>
            </div>
            <div class="col-md-4">
              <div className="card">
                <div class="founder">
                  <div className="found">
                    <img src={web7} alt="" />
                  </div>
                  <div className="text1">Bill gate</div>
                  <div className="text1">Microsoft</div>
                  <p className="text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis,     sint?  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div className="card">
                <div class="founder">
                  <div className="found">
                    <img src={web8} alt="" />
                  </div>
                  <div className="text1">Steve Jobs</div>
                  <div className="text1">Apple</div>
                  <p className="text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis,     sint?  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div className="card">
                <div class="founder">
                  <div className="found">
                    <img src={web7} alt="" />
                  </div>
                  <div className="text1">Bill gate</div>
                  <div className="text1">Microsoft</div>
                  <p className="text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis,     sint?  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div id="testimonial1" >
        <div class="container">
          <div class="row">
            <div class="col-md-12">
            <div class="section-head12">
              <h1>OUR OFFICE</h1>
            </div>
            </div>
            <div class="col-md-3 office_location">
              <div className="card ">
                <h1>Delhi</h1>
                <hr />
                  <h4><strong>1263 Mission Street,<br /> Floor 3 Delhi<br />CA 94103
                    </strong>
                  </h4> 
              </div>
            </div>
            <div class="col-md-3 office_location">
              <div className="card">
              <h1>Mubai</h1>
              <hr />
                  <h4><strong>1263 Mission Street,<br /> Floor 3 Delhi<br />CA 94103
                    </strong>
                  </h4> 
              </div>
            </div>
            <div class="col-md-3 office_location">
              <div className="card">
              <h1>Bengaluru</h1>
              <hr />
                  <h4><strong>1263 Mission Street,<br /> Floor 3 Delhi<br />CA 94103
                    </strong>
                  </h4> 
              </div>
            </div>
            <div class="col-md-3 office_location">
              <div className="card">
              <h1>Channai</h1>
              <hr />
                  <h4><strong>1263 Mission Street,<br /> Floor 3 Delhi<br />CA 94103
                    </strong>
                  </h4> 
              </div>
            </div> 
          </div>
        </div>
      </div>
</>
  );
};

export default Contect;