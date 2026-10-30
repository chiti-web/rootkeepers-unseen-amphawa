import { useEffect, useRef, useState } from 'react'
import Icon from './Icons.jsx'
import { getMedia, imgProps, useReveal } from '../lib/helpers.js'

export function Reveal({ as: Tag = 'div', className = '', delay = 0, children, ...rest }) {
  const [ref, shown] = useReveal()
  return (
    <Tag ref={ref} className={`reveal ${shown ? 'in' : ''} ${className}`} style={{ '--d': `${delay}ms` }} {...rest}>
      {children}
    </Tag>
  )
}

export function SectionHead({ eyebrow, title, lead, dark = false }) {
  return (
    <Reveal className={dark ? 'head on-dark' : 'head'}>
      <p className={`eyebrow ${dark ? 'on-dark' : ''}`}>{eyebrow}</p>
      <h2>{title}</h2>
      {lead && <p className={`section-lead ${dark ? 'on-dark' : ''}`}>{lead}</p>}
    </Reveal>
  )
}

/** ภาพพร้อมคำบรรยาย กดขยายดูใหญ่ได้ (ใช้ <dialog> จึงกัก focus และปิดด้วย Esc) */
export function Figure({ id, sizes, className = '', zoom = true }) {
  const m = getMedia(id)
  const ref = useRef(null)
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const d = ref.current
    if (!d) return
    if (open && !d.open) d.showModal()
    if (!open && d.open) d.close()
  }, [open])
  if (!m) return null
  const img = imgProps(id, sizes)
  return (
    <figure className={`figure ${className}`}>
      {zoom ? (
        <button className="figure-btn" onClick={() => setOpen(true)} aria-label={`ขยายภาพ: ${m.alt}`} aria-haspopup="dialog">
          <img {...img} loading="lazy" />
          <span className="zoom-hint" aria-hidden="true">
            <Icon name="eye" size={16} /> ขยาย
          </span>
        </button>
      ) : (
        <img {...img} loading="lazy" />
      )}
      <figcaption>{m.caption}</figcaption>
      {zoom && (
        <dialog ref={ref} className="lightbox" aria-label={m.alt} onClose={() => setOpen(false)} onClick={(e) => e.target === ref.current && setOpen(false)}>
          <button className="dialog-close" onClick={() => setOpen(false)} aria-label="ปิดภาพ">
            <Icon name="close" />
          </button>
          {open && <img src={img.src} alt={m.alt} />}
          <p className="caption">{m.caption}</p>
        </dialog>
      )}
    </figure>
  )
}
