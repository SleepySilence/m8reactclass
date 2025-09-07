import { CookieClicker } from './CookieClicker'
import { Pokemon } from './Pokemon'

export function Games() {
  return (
    <main className="page-stack">
      <h1>Games</h1>
      <CookieClicker />
      <Pokemon />
    </main>
  )
}
