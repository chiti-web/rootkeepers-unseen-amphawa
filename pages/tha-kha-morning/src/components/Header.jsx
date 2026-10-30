import { useEffect, useState } from 'react'
import Icon from './Icons.jsx'
import site from '../data/site.json'
import { asset } from '../lib/helpers.js'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('keydown', onKey)
    }
  }, [])

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="wrap header-row">
        <a className="brand" href="#top" aria-label={`${site.brand} กลับขึ้นด้านบน`}>
          <img src={asset('brand/logo-horizontal.png')} alt={site.brand} width="150" height="52" />
        </a>
        <nav className={`nav ${open ? 'is-open' : ''}`} aria-label="เมนูหลัก" id="main-nav">
          {site.nav.map((n) => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)}>
              {n.label}
            </a>
          ))}
        </nav>
        <a className="btn btn-primary header-cta" href={site.secondaryCta.href}>
          {site.secondaryCta.label}
        </a>
        <button
          className="menu-btn"
          aria-expanded={open}
          aria-controls="main-nav"
          aria-label={open ? 'ปิดเมนู' : 'เปิดเมนู'}
          onClick={() => setOpen((v) => !v)}
        >
          <Icon name={open ? 'close' : 'menu'} />
        </button>
      </div>
    </header>
  )
}
