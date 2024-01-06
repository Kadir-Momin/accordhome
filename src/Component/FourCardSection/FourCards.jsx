import './FourCards.css'
import cardImg from '../../ImageSrc/search.jpg'

const FourCards = () => {
    return(
        <div className="four-cards-container">
            <header>
                <div className="four-cards-wrapper wrapper--narrow">
                    <h1>Reliable, efficient delivery<br />
                        <span>Powered by Technology</span>
                    </h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure aliquid impedit harum 
                        quae labore, atque fugiat eum suscipit ipsa aperiam. In quaerat corporis, ipsam vero 
                        assumenda ab similique </p>
                </div>
            </header>

            <main className="four-cards-wrapper">
                <div className="layout-grid">
                    <div className="col">
                        <div className="four-cards-card border-teal">
                            <h2 className='card__title'>Supervisor</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, non.</p>
                            <img className='card__img' src={cardImg} />
                        </div>
                    </div>

                    <div className="col">
                        <div className="four-cards-card border-red">
                            <h2 className='card__title'>Team Builder</h2>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam, ipsam.</p>
                            <img className='card__img' src={cardImg} />
                        </div>
                        <div className="four-cards-card border-yellow">
                            <h2 className='card__title'>Karma</h2>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur, non.</p>
                            <img className='card__img' src={cardImg} />
                        </div>
                    </div>

                    <div className="col">
                        <div className="four-cards-card border-blue">
                            <h2 className='card__title'>Calculator</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, reprehenderit.</p>
                            <img className='card__img' src={cardImg} />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default FourCards