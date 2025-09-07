import { NavLink } from 'react-router-dom'

export function NotFound() {
  return (
    <main className="page-stack">
      <h1>404 - Page Not Found</h1>
      <p><NavLink to="/">Go back home</NavLink></p>
    </main>
  )
}
