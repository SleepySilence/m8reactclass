import { useState } from 'react'
import './App.css'
import { Home } from './components/Home'
import { Aboutme } from './components/Aboutme'
import { TopTen } from './components/TopTen'
import { CookieClicker } from './components/CookieClicker'
import { Pokemon } from './components/Pokemon'

export default function App() {
  const [page, setPage] = useState('home')

  const catItems = [
    { title: 'Scottish Fold', image: '/cats/scottish.jpg', link: 'https://en.wikipedia.org/wiki/Scottish_Fold', description: 'Round face, folded ears, ultra-cute.' },
    { title: 'British Shorthair', image: '/cats/british.jpg', link: 'https://en.wikipedia.org/wiki/British_Shorthair', description: 'Calm, cuddly, teddy-bear vibes.' },
    { title: 'Ragdoll', image: '/cats/ragdoll.jpg', link: 'https://en.wikipedia.org/wiki/Ragdoll', description: 'Floppy when held; super affectionate.' },
    { title: 'Maine Coon', image: '/cats/mainecoon.jpg', link: 'https://en.wikipedia.org/wiki/Maine_Coon', description: 'Huge, gentle giants.' },
    { title: 'Siamese', image: '/cats/siamese.jpg', link: 'https://en.wikipedia.org/wiki/Siamese_cat', description: 'Vocal, social, blue eyes.' },
    { title: 'Persian', image: '/cats/persian.jpg', link: 'https://en.wikipedia.org/wiki/Persian_cat', description: 'Elegant and chill.' },
    { title: 'Bengal', image: '/cats/bengal.jpg', link: 'https://en.wikipedia.org/wiki/Bengal_cat', description: 'Mini leopard pattern.' },
    { title: 'Sphynx', image: '/cats/sphynx.jpg', link: 'https://en.wikipedia.org/wiki/Sphynx_cat', description: 'Hairless charm.' },
    { title: 'Norwegian Forest', image: '/cats/norwegian.jpg', link: 'https://en.wikipedia.org/wiki/Norwegian_Forest_cat', description: 'Viking fluff.' },
    { title: 'American Shorthair', image: '/cats/americanshorthair.jpg', link: 'https://en.wikipedia.org/wiki/American_Shorthair', description: 'Classic house cat.' },
  ]

  return (
    <>
      <header className="site-header">
        <nav className="nav">
          <button onClick={() => setPage('home')}>Home</button>
          <button onClick={() => setPage('les2')}>Lesson 2</button>
          <button onClick={() => setPage('les3')}>Lesson 3</button>
          <button onClick={() => setPage('les4')}>Lesson 4</button>
          <button onClick={() => setPage('les5')}>Lesson 5</button>
        </nav>
      </header>

      {page === 'home' && (
        <main style={{ padding: 24 }}>
          <h1>Welcome to my website</h1>
        </main>
      )}

      {page === 'les2' && (
        <main className="page-single">
          <Aboutme />
        </main>
      )}

      {page === 'les3' && (
        <main className="page-grid">
          <Aboutme />
          <TopTen title="Top 10 Cutest Cat Breeds" items={catItems} />
        </main>
      )}

      {page === 'les4' && (
        <main className="page-single">
          <CookieClicker />
        </main>
      )}

      {page === 'les5' && (
        <main className="page-single">
          <Pokemon />
        </main>
      )}
    </>
  )
}
