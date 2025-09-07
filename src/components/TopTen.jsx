import './TopTen.css'

export function TopTen({ title, items = [] }) {
  const onThumbError = (e) => { e.currentTarget.src = 'https://placekitten.com/96/96' }

  return (
    <section className="TopTen card">
      <h2 className="topten__title">{title}</h2>
      <ol className="topten__list">
        {items.map((item, idx) => (
          <li className="topten__item" key={item.title + idx}>
            <span className="topten__rank">{idx + 1}</span>
            <img
              className="topten__thumb"
              src={item.image /* put files in /public/cats/ */}
              alt={item.title}
              onError={onThumbError}
            />
            <div className="topten__content">
              <h3 className="topten__heading">
                {item.link ? (
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    {item.title}
                  </a>
                ) : (
                  item.title
                )}
              </h3>
              {item.description && <p className="topten__desc">{item.description}</p>}
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
