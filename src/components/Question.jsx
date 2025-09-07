import { useState } from 'react'
import './FAQ.css'

export function Question({ question, answer }) {
  const [open, setOpen] = useState(false)

  return (
    <li className={`faq__item ${open ? 'open' : ''}`} onClick={() => setOpen(!open)}>
      <h3 className="faq__question">{question}</h3>
      {open && <p className="faq__answer">{answer}</p>}
    </li>
  )
}
