import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import './App.scss'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Portfolio from './components/Portfolio'
import Work from './components/Work'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path="about" element={<About/>} />
          <Route path="contact" element={<Contact/>} />
          <Route path="portfolio" element={<Portfolio/>} />
          <Route path="work" element={<Work/>} />
        </Route>
      </Routes>
    </>
  )
}

export default App