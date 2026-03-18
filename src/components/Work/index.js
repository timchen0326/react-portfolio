import React, { useState, useEffect } from "react";
import './index.scss';
import workData from '../../data/work.json';
import AnimatedLetters from "../AnimatedLetters";

// Wraps numbers like "30%", "250+", "15%" in a highlight span
const highlightMetrics = (text) => {
  const parts = text.split(/(\d+[%+])/g);
  return parts.map((part, i) =>
    /^\d+[%+]$/.test(part)
      ? <strong key={i} className="metric">{part}</strong>
      : part
  );
};

const Work = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <div className="container work-page">
        <h1 className="page-title">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['W','o','r','k',' ','E','x','p','e','r','i','e','n','c','e','s']}
            idx={11}
          />
        </h1>
        <div className="experience-container">
          {workData.experiences.map((exp, idx) => (
            <div className="experience-box" key={idx}>
              <div className="timeline-dot" />
              <h3 className="job-title">
                {exp.role} <span className="company">@ {exp.company}</span>
              </h3>
              <p className="period">{exp.period}</p>
              <p className="description">{highlightMetrics(exp.description)}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Work;
