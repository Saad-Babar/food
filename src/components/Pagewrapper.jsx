import React from "react";
import Navbar from "./Navbar";
import StickyHeader from "./StickyHeader";
import MainSlider from "./MainSlider";
import About from "./About";

function Pagewrapper () {
    return (
        <div className="page-wrapper">
            <Navbar></Navbar>
            <StickyHeader></StickyHeader>
            <MainSlider></MainSlider>
            <About></About>
        </div>
    )
}

export default Pagewrapper