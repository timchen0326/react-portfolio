import { useEffect, useState } from 'react'
import {
  faHtml5,
  faCss3,
  faJsSquare,
  faPython,
  faRProject,
  faJava,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
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
            I’m an ambitious front-end developer and data analyst looking to work in a team where I can use React, TypeScript, and charting libraries to build responsive interfaces and dashboards that help teams make decisions.
          </p>
          <p align="LEFT">
            I’m confident, detail-oriented, and curious. Whether I’m integrating an API in React, cleaning data in Python, or designing a user interface, I focus on quality and performance.
          </p>
          <p>
            If I had to describe myself in one sentence, I’m someone who combines front-end development with data analysis to turn data into clear, useful information for users.
          </p>
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
                <FontAwesomeIcon icon={faJava} />
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
      <Loader type="pacman" />
    </>
  )
}

export default About
