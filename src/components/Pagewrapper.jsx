import React from "react";
import Navbar from "./Navbar";
import StickyHeader from "./StickyHeader";
import MainSlider from "./MainSlider";

function Pagewrapper () {
    return (
        <div className="page-wrapper">
            <Navbar></Navbar>
            <StickyHeader></StickyHeader>
            <MainSlider></MainSlider>
        </div>
    )
}

export default Pagewrapper