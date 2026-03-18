import { useEffect, useState, useRef } from 'react'
import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import L from 'leaflet'
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png'
import markerIcon from 'leaflet/dist/images/marker-icon.png'
import markerShadow from 'leaflet/dist/images/marker-shadow.png'

delete L.Icon.Default.prototype._getIconUrl

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
})

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const [isSending, setIsSending] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [sendError, setSendError] = useState(false)
  const form = useRef()

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
    return () => clearTimeout(timeoutId)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()
    setIsSending(true)
    setSendError(false)

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setIsSending(false)
          setSubmitted(true)
        },
        () => {
          setIsSending(false)
          setSendError(true)
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C','o','n','t','a','c','t',' ','m','e']}
              idx={15}
            />
          </h1>
          <p>
            I am interested in freelance opportunities—especially on ambitious
            or large projects. However, if you have any other requests or
            questions, don't hesitate to contact me using the form below.
          </p>
          <div className="contact-form">
            {submitted ? (
              <div className="success-message">
                <p>Message sent! I'll get back to you soon.</p>
              </div>
            ) : (
              <form ref={form} onSubmit={sendEmail}>
                <ul>
                  <li className="half">
                    <input placeholder="Name" type="text" name="name" required />
                  </li>
                  <li className="half">
                    <input placeholder="Email" type="email" name="email" required />
                  </li>
                  <li>
                    <input placeholder="Subject" type="text" name="subject" required />
                  </li>
                  <li>
                    <textarea placeholder="Message" name="message" required />
                  </li>
                  {sendError && (
                    <li className="error-message">
                      Failed to send. Please try again.
                    </li>
                  )}
                  <li>
                    <input
                      type="submit"
                      className="flat-button"
                      value={isSending ? 'SENDING…' : 'SEND'}
                      disabled={isSending}
                    />
                  </li>
                </ul>
              </form>
            )}
          </div>
        </div>
        <div className="info-map">
          Tim Chen,
          <br />
          Toronto, ON,
          <br />
          Canada
          <br />
          <br />
          <span>timchen0326ca@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[43.6532, -79.3832]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[43.6532, -79.3832]}>
              <Popup>Tim's location — Toronto, ON</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </>
  )
}

export default Contact
