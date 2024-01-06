import React from "react";
import FourCards from "../Component/FourCardSection/FourCards";
import Slider from "../Component/ImageSlider/Slider"
import Footer from "../Component/Footer/Footer";


const HomePage = () => {
    return(
        <>
            <Slider />    
            <FourCards />
            <Footer />
        </>
    )
}

export default HomePage