import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/css/image-gallery.css'
import './Gallery.css'

export function Gallery() {
  const base = import.meta.env.BASE_URL
  const images = [
    { original: base + 'cats/scottish.jpg',        thumbnail: base + 'cats/scottish.jpg',        description: 'Scottish Fold' },
    { original: base + 'cats/british.jpg',         thumbnail: base + 'cats/british.jpg',         description: 'British Shorthair' },
    { original: base + 'cats/ragdoll.jpg',         thumbnail: base + 'cats/ragdoll.jpg',         description: 'Ragdoll' },
    { original: base + 'cats/mainecoon.jpg',       thumbnail: base + 'cats/mainecoon.jpg',       description: 'Maine Coon' },
    { original: base + 'cats/siamese.jpg',         thumbnail: base + 'cats/siamese.jpg',         description: 'Siamese' },
    { original: base + 'cats/persian.jpg',         thumbnail: base + 'cats/persian.jpg',         description: 'Persian' },
    { original: base + 'cats/bengal.jpg',          thumbnail: base + 'cats/bengal.jpg',          description: 'Bengal' },
    { original: base + 'cats/sphynx.jpg',          thumbnail: base + 'cats/sphynx.jpg',          description: 'Sphynx' },
    { original: base + 'cats/norwegian.jpg',       thumbnail: base + 'cats/norwegian.jpg',       description: 'Norwegian Forest' },
    { original: base + 'cats/americanshorthair.jpg', thumbnail: base + 'cats/americanshorthair.jpg', description: 'American Shorthair' },
  ]

  return (
    <section className="gallery-wrap card">
      <h2>Gallery</h2>
      <ImageGallery
        items={images}
        showPlayButton={false}
        showFullscreenButton={false}
      />
    </section>
  )
}
