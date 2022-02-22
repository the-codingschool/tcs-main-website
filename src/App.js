import React, { useEffect } from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import AOS from "aos";

// ----- CSS ----- //
// Bootstrap
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";
// Custom
import "./assets/css/global.scss";

// Component
import AboutUs from "./pages/about-us/AboutUs";
import Topnav from "./component/topnav/Topnav";
import Footer from "./component/footer/Footer";
import Involved from "./pages/involved/Involved";
import Home from "./pages/home/Home";
import Train from "./pages/train/train";
import ScrollToTop from "./component/global/scrollToTop";

function App() {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <BrowserRouter>
            <ScrollToTop />
            <Topnav />
            <Switch>
                <Route path={"/involved"} component={Involved} />
                <Route path={"/"} component={Home} exact={true} />
                <Route path={"/about_us"} component={AboutUs} />
                <Route path={"/train"} component={Train} />
            </Switch>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
