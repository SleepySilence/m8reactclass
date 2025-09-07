import { useEffect, useState } from 'react'
import './App.css'
import { Home } from './components/Home'
import { Aboutme } from './components/Aboutme'
import { TopTen } from './components/TopTen'

function App() {
  const getPage = () => {
    const h = window.location.hash.replace('#', '')
    return h === '/les2' || h === '/les3' ? h : '/home'
  }
  const [page, setPage] = useState(getPage())

  useEffect(() => {
    const onHash = () => setPage(getPage())
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  const catItems = [
    { title: 'Scottish Fold', image: '/cats/scottish.jpg', link: 'https://en.wikipedia.org/wiki/Scottish_Fold', description: 'Round face, folded ears, ultra-cute.' },
    { title: 'British Shorthair', image: '/cats/british.jpg', link: 'https://en.wikipedia.org/wiki/British_Shorthair', description: 'Calm, cuddly, teddy-bear vibes.' },
    { title: 'Ragdoll', image: '/cats/ragdoll.jpg', link: 'https://en.wikipedia.org/wiki/Ragdoll', description: 'Floppy when held; super affectionate.' },
    { title: 'Maine Coon', image: '/cats/mainecoon.jpg', link: 'https://en.wikipedia.org/wiki/Maine_Coon', description: 'Huge, gentle giants with floofy tails.' },
    { title: 'Siamese', image: '/cats/siamese.jpg', link: 'https://en.wikipedia.org/wiki/Siamese_cat', description: 'Vocal, social, striking blue eyes.' },
    { title: 'Persian', image: '/cats/persian.jpg', link: 'https://en.wikipedia.org/wiki/Persian_cat', description: 'Elegant fluffballs; very chill.' },
    { title: 'Bengal', image: '/cats/bengal.jpg', link: 'https://en.wikipedia.org/wiki/Bengal_cat', description: 'Mini leopard pattern, playful energy.' },
    { title: 'Sphynx', image: '/cats/sphynx.jpg', link: 'https://en.wikipedia.org/wiki/Sphynx_cat', description: 'Hairless charm, loves warmth.' },
    { title: 'Norwegian Forest', image: '/cats/norwegian.jpg', link: 'https://en.wikipedia.org/wiki/Norwegian_Forest_cat', description: 'Viking fluff; thick double coat.' },
    { title: 'American Shorthair', image: '/cats/americanshorthair.jpg', link: 'https://en.wikipedia.org/wiki/American_Shorthair', description: 'Balanced, friendly, classic house cat.' },
  ]

  return (
    <>
      <header className="site-header">
        <nav className="nav">
          <a href="#/home">Home</a>
          <a href="#/les2">Les 2</a>
          <a href="#/les3">Les 3</a>
        </nav>
      </header>

      {page === '/home' && (
        <main className="page-single">
          <Home />
        </main>
      )}

      {page === '/les2' && (
        <main className="page-single">
          <Aboutme />
        </main>
      )}

      {page === '/les3' && (
        <main className="page-grid">
          <Aboutme />
          <TopTen title="Top 10 Cutest Cat Breeds" items={catItems} />
        </main>
      )}
    </>
  )
}

export default App
