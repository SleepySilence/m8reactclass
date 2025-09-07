import { Routes, Route } from 'react-router-dom'
import './App.css'
import { Navbar } from './components/Navbar'
import { Home } from './components/Home'
import { About } from './components/About'
import { Games } from './components/Games'
import { Contact } from './components/Contact'
import { NotFound } from './components/NotFound'

export default function App() {
  return (
    <>
      <Navbar />
      <main className="page">
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/games" element={<Games />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  )
}
