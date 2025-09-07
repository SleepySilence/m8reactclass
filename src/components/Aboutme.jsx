import './Aboutme.css'

export function Aboutme() {
  const base = import.meta.env.BASE_URL
  return (
    <article className="AboutMe card">
      <img className="aboutMe__img" src={base + 'image.png'} alt="About me" />
      <div className="aboutMe__content">
        <h2 className="aboutMe__title">About Me</h2>
        <p className="aboutMe__paragraph">
          wassup Im a beginning fullstack developer who loves building with React. In my free time I hang out with my cat, learn new tech, and travel.
        </p>
      </div>
    </article>
  )
}
