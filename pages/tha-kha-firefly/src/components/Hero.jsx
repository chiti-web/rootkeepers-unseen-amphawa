import { useEffect, useRef } from 'react'
import Icon from './Icons.jsx'
import site from '../data/site.json'
import { imgProps, getMedia, prefersReducedMotion } from '../lib/helpers.js'

export default function Hero() {
  const imgRef = useRef(null)
  const img = imgProps('hero')
  const m = getMedia('hero')

  // Parallax เบา ๆ (≤ 24 px) ปิดเมื่อผู้ใช้ตั้งค่าลดการเคลื่อนไหว
  useEffect(() => {
    if (prefersReducedMotion() || !imgRef.current) return
    let raf = 0
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const y = Math.min(window.scrollY * 0.06, 24)
        if (imgRef.current) imgRef.current.style.transform = `translate3d(0, ${y}px, 0) scale(1.06)`
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      {img && <img ref={imgRef} className="hero-img" {...img} fetchpriority="high" />}
      <div className="hero-shade" aria-hidden="true" />
      <div className="wrap hero-body">
        <p className="eyebrow on-dark">{site.kicker}</p>
        <h1 id="hero-title" className="hero-title">
          {site.name}
        </h1>
        <p className="hero-tag">{site.headline}</p>
        <p className="hero-lead">{site.lead}</p>
        <div className="hero-actions">
          <a className="btn btn-cream" href={site.primaryCta.href}>
            {site.primaryCta.label} <Icon name="arrow" size={20} />
          </a>
          <a className="btn btn-ghost-light" href={site.secondaryCta.href}>
            {site.secondaryCta.label}
          </a>
        </div>
      </div>
      {m && <p className="hero-credit">{m.caption} · ภาพ: ทีม ฝากราก | ROOTKEEPERS</p>}
    </section>
  )
}
