import { Question } from './Question'
import './FAQ.css'

export function FAQ() {
  return (
    <section className="FAQ card">
      <h2>Frequently Asked Questions</h2>
      <ul className="faq__list">
        <Question question="Is this a question?" answer="Yes, and this is the answer." />
        <Question question="Can I add my own questions?" answer="Yes — just add more Question components with props." />
        <Question question="Does this toggle open/close?" answer="Yes, click again to close it." />
      </ul>
    </section>
  )
}
