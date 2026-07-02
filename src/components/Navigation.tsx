import { useState } from 'react'
import { navItems } from '../data/profile'
import { useActiveSection } from '../hooks/useActiveSection'

export function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false)
  const activeId = useActiveSection(navItems.map((item) => item.id))

  const handleNavClick = (id: string) => {
    setMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav
      aria-label="Primary"
      className="sticky top-0 z-50 border-b border-border bg-canvas/90 backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          className="text-sm font-semibold tracking-wide text-ink transition-colors hover:text-accent"
          onClick={(event) => {
            event.preventDefault()
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
        >
          Sue Ryu
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                type="button"
                onClick={() => handleNavClick(item.id)}
                className={`rounded-md px-3 py-2 text-sm transition-colors ${
                  activeId === item.id
                    ? 'bg-accent-soft font-medium text-accent'
                    : 'text-muted hover:text-ink'
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md border border-border px-3 py-2 text-sm text-ink md:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? 'Close' : 'Menu'}
        </button>
      </div>

      {menuOpen && (
        <div
          id="mobile-menu"
          className="border-t border-border bg-canvas px-6 py-4 md:hidden"
        >
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => handleNavClick(item.id)}
                  className={`block w-full rounded-md px-3 py-2 text-left text-sm ${
                    activeId === item.id
                      ? 'bg-accent-soft font-medium text-accent'
                      : 'text-muted hover:text-ink'
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}
