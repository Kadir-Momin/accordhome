import React from "react"
import './FirstMainSection.css'
import Slider from "../ImageSlider/Slider"


const FirstMainSection = () => {
    return(
        <div className="first-main-section">            
            <div className="top-main">
                <Slider />
            </div>
        </div>
    )
}

export default FirstMainSection