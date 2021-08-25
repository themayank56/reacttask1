import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Contect from "./Contect";
import Navbar from "./Navbar";
import Footer from "./Footer";


import {
  BrowserRouter as Router,
  Switch, Route, Redirect} from "react-router-dom";
const App = () => {
  return (
    <>  
    <Router>
      <Navbar />
        <main> 
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/services" component={Services} />
            <Route exact path="/contect" component={Contect} />
            <Redirect to ="/" />
          </Switch>
      <Footer />
        </main>
    </Router>
      
    </>
  );
};

export default App;
