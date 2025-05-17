import React, { useState, useEffect } from "react";
import Loader from "react-loaders";
import './index.scss';
import AnimatedLetters from "../AnimatedLetters";
import portfolioData from '../../data/portfolio.json';

const Portfolio = () => {
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        const timeout = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        return () => {
            clearTimeout(timeout);
        }
    });

    const renderPortfolio = (portfolio) => {
        return (
            <div className="images-container">
                {portfolio.map((port, index) => {
                    return (
                        <div className="image-box" key={index}>
                            <img src={process.env.PUBLIC_URL + '/' + port.cover} className="portfolio-image" alt="portfolio" />
                            <div className="content">
                                <p className="title">{port.title}</p>
                                <h4 className="description">{port.description}</h4>
                                <button className="btn" onClick={() => window.open(port.link)}>View</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        )   
    }
    return (
        <>
            <div className="container portfolio-page">
                <h1 className="page-title">
                    <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={['P', 'o', 'r', 't', 'f', 'o', 'l', 'i', 'o']}
                        idx={15}
                    />
                </h1>
                <div>{renderPortfolio(portfolioData.portfolio)}</div>
            </div>
            <Loader type="pacman" />
        </>

    );
}
export default Portfolio;