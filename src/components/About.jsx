import { Aboutme } from './Aboutme'
import { TopTen } from './TopTen'

export function About() {
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
    { title: 'American Shorthair', image: '/cats/americanshorthair.jpg', link: 'https://en.wikipedia.org/wiki/American_Shorthair', description: 'Balanced, friendly, classic house cat.' }
  ]

  return (
    <main className="page-stack">
      <h1>About</h1>
      <Aboutme />
      <TopTen title="Top 10 Cutest Cat Breeds" items={catItems} />
    </main>
  )
}
