import React, { useState, useEffect } from "react";
import './index.scss';
import AnimatedLetters from "../AnimatedLetters";
import portfolioData from '../../data/portfolio.json';

const FILTERS = ['All', 'Software', 'Data', 'ML'];

const Portfolio = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const [activeFilter, setActiveFilter] = useState('All');

    useEffect(() => {
        const timeout = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        return () => clearTimeout(timeout);
    }, []);

    const filtered = activeFilter === 'All'
        ? portfolioData.portfolio
        : portfolioData.portfolio.filter(p => p.category === activeFilter);

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

                <div className="filter-bar">
                    {FILTERS.map(f => (
                        <button
                            key={f}
                            className={`filter-btn${activeFilter === f ? ' active' : ''}`}
                            onClick={() => setActiveFilter(f)}
                        >
                            {f}
                        </button>
                    ))}
                </div>

                <div className="images-container">
                    {filtered.map((port, index) => (
                        <div className="image-box" key={index}>
                            <img
                                src={process.env.PUBLIC_URL + '/' + port.cover}
                                className="portfolio-image"
                                alt={port.title}
                                loading="lazy"
                            />
                            <span className="category-badge">{port.category}</span>
                            <div className="content">
                                <p className="title">{port.title}</p>
                                <div className="tech-pills">
                                    {port.description.split(', ').map(tech => (
                                        <span key={tech} className="tech-pill">{tech.trim()}</span>
                                    ))}
                                </div>
                                <button
                                    className="btn"
                                    onClick={() => window.open(port.link)}
                                    aria-label={`View ${port.title}`}
                                >
                                    View ↗
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
export default Portfolio;
