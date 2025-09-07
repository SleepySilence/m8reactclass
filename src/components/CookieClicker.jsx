import { useState, useEffect } from 'react'
import './CookieClicker.css'

export function CookieClicker() {
  const [cookies, setCookies] = useState(0)
  const [multiplier, setMultiplier] = useState(1)
  const [auto, setAuto] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      if (auto > 0) setCookies(c => c + auto)
    }, 1000)
    return () => clearInterval(id)
  }, [auto])

  return (
    <section className="Cookie card">
      <h2 className="cookie__title">Cookie Clicker</h2>

      <div className="cookie__stats">
        <div>Cookies: <strong>{cookies}</strong></div>
        <div>Per Click: <strong>{multiplier}</strong></div>
        <div>Auto/sec: <strong>{auto}</strong></div>
      </div>

      <button className="cookie__big" onClick={() => setCookies(cookies + multiplier)}>
        <img src="/cookie.png" alt="cookie" /> {/* place your image at /public/cookie.png */}
      </button>

      <div className="cookie__shop">
        <button onClick={() => cookies >= 10 && (setCookies(cookies - 10), setMultiplier(multiplier + 1))}>
          Upgrade Click (+1) — 10
        </button>
        <button onClick={() => cookies >= 50 && (setCookies(cookies - 50), setAuto(auto + 1))}>
          Auto (+1/sec) — 50
        </button>
        <button onClick={() => { setCookies(0); setMultiplier(1); setAuto(0); }}>
          Reset
        </button>
      </div>
    </section>
  )
}
