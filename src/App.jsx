import './App.css'

function App() {
  return (
    <div className="app-container">
      <article className="news-article">
        <h1>Fluffy de kat verovert het internet met schattige foto's</h1>
        
        <div className="article-content">
          <img 
            src="/image.png"
            alt="My cute cat" 
            className="article-img" 
          />
          
          <div className="article-text">
            <p>
              De driejarige kat <strong><a href="https://www.instagram.com/explore/tags/fluffycat/" target="_blank" rel="noopener noreferrer">Fluffy</a></strong> is in korte tijd een ware internetster geworden. 
              Met haar grote ogen en pluizige vacht verovert ze de harten van duizenden volgers op social media.
            </p>

            <p>
              Haar baasje deelt dagelijks foto's en filmpjes van de kat. Vooral de video's waarin Fluffy 
              probeert een laserlichtje te vangen zijn razend populair en worden wereldwijd gedeeld.
            </p>

            <p>
              Volgens dierenexperts is het succes van Fluffy niet verrassend: "Katten zijn al jaren 
              de populairste dieren op internet. Fluffy is daar een perfect voorbeeld van." 
            </p>

            <p>
              Fans hopen dat er binnenkort zelfs een <em><a href="https://www.etsy.com/market/cat_calendar" target="_blank" rel="noopener noreferrer">"Fluffy the Cat" kalender</a></em> of knuffel 
              op de markt komt. Tot die tijd genieten ze dagelijks van nieuwe updates op Instagram.
            </p>
          </div>
        </div>
      </article>
    </div>
  )
}

export default App