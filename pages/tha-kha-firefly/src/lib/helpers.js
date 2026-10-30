import { useEffect, useRef, useState } from 'react'
import media from '../data/media.json'

export const asset = (p) => `${import.meta.env.BASE_URL}${p}`

const byId = Object.fromEntries(media.map((m) => [m.id, m]))
export const getMedia = (id) => (id ? byId[id] || null : null)

/** พร็อพของ <img> จากทะเบียนภาพ media.json (ภาพที่มี small: true มีไฟล์ -800.webp เพิ่มสำหรับมือถือ) */
export function imgProps(id, sizes = '100vw') {
  const m = getMedia(id)
  if (!m) return null
  const p = {
    src: asset(`${m.file}.webp`),
    alt: m.alt,
    width: m.width,
    height: m.height,
    style: { objectPosition: m.focus || '50% 50%' },
  }
  if (m.small) {
    p.srcSet = `${asset(`${m.file}-800.webp`)} 800w, ${asset(`${m.file}.webp`)} ${m.width}w`
    p.sizes = sizes
  }
  return p
}

export const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

/** ใส่ class "in" เมื่อองค์ประกอบเลื่อนเข้าจอ (ครั้งเดียว) */
export function useReveal() {
  const ref = useRef(null)
  const [shown, setShown] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (prefersReducedMotion() || !('IntersectionObserver' in window)) {
      setShown(true)
      return
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShown(true)
          io.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return [ref, shown]
}
