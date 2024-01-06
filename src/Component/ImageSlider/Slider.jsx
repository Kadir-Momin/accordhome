// import React, { useState } from "react"
import ImageSlider  from './ImageSlider'
import img1 from '../../ImageSrc/accordhome.jpg'
import img2 from '../../ImageSrc/accordhome.jpg'
import img3 from '../../ImageSrc/accordhome.jpg'
import img4 from '../../ImageSrc/accordhome.jpg'
import img5 from '../../ImageSrc/accordhome.jpg'
// import { ArrowBigLeft, ArrowBigRight} from 'lucide-react'



const Images = [
    {url: img1, alt: "Image One"},
    {url: img2, alt: "Image Two"},
    {url: img3, alt: "Image Three"},
    {url: img4, alt: "Image Four"},
    {url: img5, alt: "Image Five"}
]

// const Images = [ img1, img2, img3, img4, img5 ]

const Slider = () => {    

    return (
        <div style={{ maxWidth:'100vw', maxHeight: '100vh', margin: '0 auto'}}>
            <div className="home__navbar">
                <div className="home__navbar-logo">
                    <img src="/Images/logo.jpg" alt="home-logo" />
                </div>

                <div className="home__navbar-nav-section">
                    <ul className='home__navbar-nav-links'>
                        <li className='home__navbar-nav-link'>Home</li>
                        <li className='home__navbar-nav-link'>Product</li>
                        <li className='home__navbar-nav-link'>About</li>
                        <li className='home__navbar-nav-link'>Contact</li>
                    </ul>
                </div>
            </div>
            <div className="slider">
                <ImageSlider Images={Images} />
            </div>
            
            <div className="responsive-slider">
                <img src={img1} alt="image1" />
            </div>

            <div className='slider-title'>
                <h1 className="slider__title1">Welcome to Accord Fuelling Services India Pvt Ltd.</h1>
                <h2 className="slider__title2" style={{
                    
                }}>Solution For Fueling Needs</h2>
            </div>            
        </div>
        
    )
}

export default Slider