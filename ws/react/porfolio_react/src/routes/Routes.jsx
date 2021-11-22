import React from 'react'
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";

import "../../src/App.css";
import NavBar from "../components/pages/Navbar";
import Header from "../components/Header";
import WhoIam from "../components/WhoIam";
import WhatIDo from "../components/WhatIDo";
import MyWork from "../components/MyWork";
import Footer from "../components/pages/Footer";
import NotFound404 from "../components/NotFound404";


const Routes = () => (
   
        <Router>
            <NavBar />
            <Switch>
                <Route exact="true" path="/" element={<Header />} />
                <Route path="/whoIam" element={<WhoIam />} />
                <Route path="/whatIdo" element={<WhatIDo />} />
                <Route path="/myWork" element={<MyWork />} />
                <Route path="*" element={<NotFound404 />} />
            </Switch>
            <Footer />
        </Router>
   
)

export default Routes
