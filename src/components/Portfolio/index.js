/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import './portfolio.css';
import image1 from '../../assets/images/Run Buddy.png';
import image2 from '../../assets/images/saysomething.png';
import image3 from '../../assets/images/sportlytics.png';
import image4 from '../../assets/images/techblog.png';
import image5 from '../../assets/images/pizzahunt.png';
import image6 from '../../assets/images/weather-dashboard.png';
import image7 from '../../assets/images/note-taker.png';
import image8 from '../../assets/images/shop-shine.png';


function Portfolio() {
    return (

        //  JSX
        <div>
            <main>
                <div className="portfolio-container">
                    <Splide options={{ rewind: true }} aria-label="Portfolio Slides">
                        <SplideSlide>
                            <div className="img-container">
                                <h1>Run Buddy</h1>
                                {/* <link>"https://kazichaska.github.io/run-buddy/"</link> */}
                                <img className="portfolio" src={image1} alt="Run Buddy" />
                                <a href="https://kazichaska.github.io/run-buddy/">Link to deployed application</a>
                                <a href="https://github.com/kazichaska/run-buddy"><i className="fa-brands fa-github"></i></a>
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            <div className="img-container">
                                <h1>SaySomething</h1>
                                <img className="portfolio" src={image2} alt="saysomthing" />
                                <a href="https://afternoon-island-61573.herokuapp.com/">Link to deployed application</a>
                                <a href="https://github.com/kazichaska/saysomething"><i className="fa-brands fa-github"></i></a>
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            <div className="img-container">
                                <h1>Sportlytics</h1>
                                <img className="portfolio" src={image3} alt="sportlytics" />
                                <a href="https://kazichaska.github.io/Sportlytics/">Link to deployed application</a>
                                <a href="https://github.com/kazichaska/Sportlytics"><i className="fa-brands fa-github"></i></a>
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            <div className="img-container">
                                <h1>Tech Blog</h1>
                                <img className="portfolio" src={image4} alt="techblog" />
                                <a href="https://powerful-forest-82738.herokuapp.com/">Link to deployed application</a>
                                <a href="https://github.com/kazichaska/tech-blog"><i className="fa-brands fa-github"></i></a>
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            <div className="img-container">
                                <h1>Pizza Hunt</h1>
                                <img className="portfolio" src={image5} alt="pizzahunt" />
                                <a href="https://pure-lowlands-07353.herokuapp.com/">Link to deployed application</a>
                                <a href="https://github.com/kazichaska/pizza-hunt"><i className="fa-brands fa-github"></i></a>
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            <div className="img-container">
                                <h1>Weather Dashboard</h1>
                                <img className="portfolio" src={image6} alt="weather-dashboard" />
                                <a href="https://kazichaska.github.io/weather-dashboard/">Link to deployed application</a>
                                <a href="https://kazichaska.github.io/weather-dashboard/" ><i className="fa-brands fa-github"></i></a>
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            <div className="img-container">
                                <h1>Note Taker</h1>
                                <img className="portfolio" src={image7} alt="note-taker" />
                                <a href="https://mysterious-sea-32906.herokuapp.com/">Link to deployed application</a>
                                <a href="https://github.com/kazichaska/note-taker"><i className="fa-brands fa-github"></i></a>
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            <div className="img-container">
                                <h1>Shop Shine</h1>
                                <img className="portfolio" src={image8} alt="shop-shine" />
                                <a href="https://serene-sea-72116.herokuapp.com/">Link to deployed application</a>
                                <a href="https://github.com/rpkrupali1/shop-shine"><i className="fa-brands fa-github"></i></a>
                            </div>
                        </SplideSlide>
                    </Splide>
                </div>
            </main>
        </div>
    )
}


export default Portfolio;