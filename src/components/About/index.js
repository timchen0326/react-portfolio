import { useEffect, useState } from 'react'
import {
  faHtml5,
  faCss3,
  faJsSquare,
  faPython,
  faRProject,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
    return () => clearTimeout(timeoutId)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I'm a software engineer and data analyst based in Toronto. I build
            full-stack web apps with React and TypeScript, and turn raw data into
            clear, actionable insights using Python and R. My internship at MAYOHR
            cut resolution time by 30% and improved troubleshooting efficiency by
            40%—I care about work that actually moves the needle.
          </p>
          <p>
            I'm detail-oriented and curious. Whether I'm integrating a REST API,
            cleaning a messy dataset, or tuning a machine learning model, I focus
            on quality and performance.
          </p>
          <p>
            Outside of code I follow basketball closely—which is probably why
            Hoops Hub was one of the first things I built.
          </p>

          <div className="skills-pills">
            {['TypeScript','React','Python','R','SQL','Supabase','Tailwind','Tableau'].map(skill => (
              <span key={skill} className="skill-pill">{skill}</span>
            ))}
          </div>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
              <div className="face1">
                <FontAwesomeIcon icon={faHtml5} />
              </div>
              <div className="face2">
                <FontAwesomeIcon icon={faCss3} />
              </div>
              <div className="face3">
                <FontAwesomeIcon icon={faJsSquare} />
              </div>
              <div className="face4">
                <FontAwesomeIcon icon={faReact} />
              </div>
              <div className="face5">
                <FontAwesomeIcon icon={faPython} />
              </div>
              <div className="face6">
                <FontAwesomeIcon icon={faRProject} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
