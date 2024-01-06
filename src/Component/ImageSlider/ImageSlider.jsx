import { useEffect, useState } from "react"
import { CircleDot, Circle } from 'lucide-react'
import './Slider.css'


const ImageSlider = ({ Images, url, alt }) => {

    const [imageIndex, setImageIndex] = useState(0)


    const updateIndex = () => {
        setImageIndex((preIndex) =>
            preIndex === Images.length - 1 ? 0 : preIndex + 1
        )
    }

    useEffect(() => {
        const intetvalId = setInterval(updateIndex, 3000)

        return () => clearInterval(intetvalId)
    })

    // const showPrevImage = () => {
    //     setImageIndex(index => {
    //         if( index === 0){
    //             return Images.length - 1
    //         } else{
    //             return index - 1
    //         }
    //     })
    // }

    // const showNextImage = () => {
    //     setImageIndex(index => {
    //         if (index === Images.length-1){
    //             return 0
    //         } else {
    //             return index + 1
    //         }
    //     })
    // }

    return (
        <div style={{ width: '100%', height: '80vh', position: 'relative' }}>
            <div style={{ width: '100%', height: '100%', display: 'flex', overflow: 'hidden' }}>
                {Images.map(({ url, alt }, index) => (
                    <img
                        key={url}
                        src={url}
                        alt={alt}
                        className="img-slider-img"
                        aria-hidden={imageIndex !== index}
                        style={{ translate: `${-100 * imageIndex}%` }}
                    />
                ))}
            </div>

            {/* <button onClick={showPrevImage} className="img-slider-btn" style={{left: '0'}}><ArrowBigLeft /></button> */}
            {/* <button onClick={showNextImage} className="img-slider-btn" style={{ right: '0'}}><ArrowBigRight /></button> */}
            <div style={{
                position: 'absolute',
                bottom: '.5rem',
                left: '50%',
                translate: '-50%',
                display: 'flex',
                gap: '0.25rem'
            }}>
                {Images.map((_, index) => (
                    <button
                        key={index}
                        className="img-slider-dot-btn"
                        onClick={() => setImageIndex(index)}>
                        {index === imageIndex ? <CircleDot /> : <Circle />}
                    </button>
                ))}
            </div>

            
            
        </div>
    )
}

export default ImageSlider