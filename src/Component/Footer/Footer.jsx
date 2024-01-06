import './Footer.css'

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="logo-container">
                <div className="firm-logo">
                    <img src="/Images/logo.jpg" alt="Instagram" />
                    
                    <small>©2021 by Accord Fuelling Services India Pvt Ltd.</small>
                    <p><strong>Corporate Office : </strong><br />
                    Office No 315 Niharika Mirage,<br />
                    Plot No 274, Sector 10, Khargharbr<br />
                    Navi Mumbai, 410210</p>
                </div>
                <div className="footer-section">
                    <div className="social-media-logo">
                        <img src="/Images/Instagram.jpg" alt="Instagram" />
                        <img src="/Images/Facebook.jpg" alt="Instagram" />
                        <img src="/Images/LinkedIn.jpg" alt="Instagram" />
                        <img src="/Images/Twitter.jpg" alt="Instagram" />
                        <img src="/Images/Youtube.jpg" alt="Instagram" />                   
                    </div>
                    <div className="contact-details">
                        <p><strong>Contact :</strong><br />
                        Phone : +91 22 4012 0681<br />
                        Mobile : +919960378621<br />
                        Email : sales@accordfuelling.in</p>
                    </div>
                </div>
                
                
            </div>
            
        </div>
    )
}

export default Footer