import React, { useState, useEffect } from "react";
import Loader from "react-loaders";
import './index.scss';
import workData from '../../data/work.json';
import AnimatedLetters from "../AnimatedLetters";

const Work = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  const renderExperiences = (experiences) => (
    <div className="experience-container">
      {experiences.map((exp, idx) => (
        <div className="experience-box" key={idx}>
          <h3 className="job-title">
            {exp.role} <span className="company">@ {exp.company}</span>
          </h3>
          <p className="period">{exp.period}</p>
          <p className="description">{exp.description}</p>
        </div>
      ))}
    </div>
  );

  return (
    <>
      <div className="container work-page">
        <h1 className="page-title">
          <AnimatedLetters 
            letterClass={letterClass}
            strArray={['W','o','r','k',' ','E','x','p','e','r','i','e','n','c','e', 's']}
            idx={11}
          />
        </h1>
        {renderExperiences(workData.experiences)}
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Work;