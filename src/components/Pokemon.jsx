import { useEffect, useState } from 'react'
import './Pokemon.css'

export function Pokemon() {
  const [pokemon, setPokemon] = useState(null)
  const [speciesText, setSpeciesText] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const controller = new AbortController()
    setLoading(true)
    setError('')

    ;(async () => {
      try {
        const res = await fetch('https://pokeapi.co/api/v2/pokemon/mew', { signal: controller.signal })
        if (!res.ok) throw new Error('Failed to fetch Pokémon')
        const data = await res.json()
        setPokemon(data)

        if (data?.species?.url) {
          const sres = await fetch(data.species.url, { signal: controller.signal })
          if (sres.ok) {
            const sdata = await sres.json()
            const entry = (sdata.flavor_text_entries || []).find(e => e.language?.name === 'en')
            if (entry?.flavor_text) {
              setSpeciesText(entry.flavor_text.replace(/\f/g, ' ').replace(/\s+/g, ' ').trim())
            }
          }
        }
      } catch (e) {
        if (e.name !== 'AbortError') setError(e.message)
      } finally {
        setLoading(false)
      }
    })()

    return () => controller.abort()
  }, [])

  if (loading) {
    return (
      <section className="Pokemon card">
        <h2>Fetching Pokémon…</h2>
      </section>
    )
  }

  if (error || !pokemon) {
    return (
      <section className="Pokemon card">
        <h2>⚠ {error || 'No data'}</h2>
      </section>
    )
  }

  const img =
    pokemon.sprites?.other?.['official-artwork']?.front_default ||
    pokemon.sprites?.front_default ||
    ''

  const heightM = (pokemon.height / 10).toFixed(1) + ' m'
  const weightKg = (pokemon.weight / 10).toFixed(1) + ' kg'
  const abilities = (pokemon.abilities || []).map(a => a.ability?.name)
  const stats = pokemon.stats || []

  return (
    <section className="Pokemon card">
      <h2 className="poke__name">#{pokemon.id} {pokemon.name}</h2>

      <div className="poke__layout">
        <div className="poke__art">{img && <img src={img} alt={pokemon.name} />}</div>

        <div className="poke__info">
          <div className="poke__row"><span className="label">Height:</span><span>{heightM}</span></div>
          <div className="poke__row"><span className="label">Weight:</span><span>{weightKg}</span></div>

          <div className="poke__types">
            {pokemon.types?.map(({ type }) => (
              <span key={type.name} className={`type type--${type.name}`}>{type.name}</span>
            ))}
          </div>

          {abilities.length > 0 && (
            <div className="poke__abilities">
              {abilities.map(n => <span key={n} className="pill">{n}</span>)}
            </div>
          )}
        </div>
      </div>

      {speciesText && (
        <p className="poke__desc">{speciesText}</p>
      )}

      {stats.length > 0 && (
        <div className="poke__stats">
          {stats.map(s => {
            const name = s.stat?.name || ''
            const val = s.base_stat || 0
            const pct = Math.min(100, Math.round((val / 180) * 100))
            return (
              <div key={name} className="stat">
                <span className="stat__name">{name}</span>
                <span className="stat__val">{val}</span>
                <div className="stat__bar"><div className="stat__fill" style={{ width: pct + '%' }} /></div>
              </div>
            )
          })}
        </div>
      )}
    </section>
  )
}
