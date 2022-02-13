import React from 'react';

import { BrowserRouter, Switch, Route } from "react-router-dom"


// ----- CSS ----- //
// Bootstrap
import 'bootstrap/dist/js/bootstrap.bundle.min'
import 'bootstrap/dist/css/bootstrap.min.css'
// Custom
import './assets/css/global.scss'

// Component
import AboutUs from "./pages/about-us/AboutUs"
import Topnav from './component/topnav/Topnav';
import Footer from './component/footer/Footer';
import Involved from './pages/involved/Involved';
import Home from './pages/home/Home';

function App() {
  return (
    <BrowserRouter>
        <Topnav />
        <Switch>
          <Route path={"/involved"} component={Involved} />
          <Route path={"/"} component={Home} />
          <Route path={"/about_us"} component={AboutUs} />
        </Switch>
        <Footer />
    </BrowserRouter>
  )
}

export default App;
