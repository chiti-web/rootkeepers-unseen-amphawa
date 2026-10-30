import { useMemo } from 'react'
import { useReveal } from '../lib/helpers.js'

// ลาย "เส้นราก" (CI 6.3): รากแตกกิ่งลงล่างเสมอ สร้างแบบสุ่มที่กำหนด seed ได้ ใช้เป็นแถบ/พื้นหลังเท่านั้น
// สี: บนครีม = เขียวหม่น · บนพื้นเขียวเข้ม = เขียวกลาง · บนพื้นน้ำตาล = ทรายทอง (ตั้งด้วย class tone-*)
function rng(seed) {
  let s = seed >>> 0
  return () => (s = (s * 1664525 + 1013904223) >>> 0) / 4294967296
}

function smooth(pts) {
  let d = `M${pts[0][0].toFixed(1)} ${pts[0][1].toFixed(1)}`
  for (let i = 1; i < pts.length - 1; i++) {
    const mx = (pts[i][0] + pts[i + 1][0]) / 2
    const my = (pts[i][1] + pts[i + 1][1]) / 2
    d += ` Q${pts[i][0].toFixed(1)} ${pts[i][1].toFixed(1)} ${mx.toFixed(1)} ${my.toFixed(1)}`
  }
  const last = pts[pts.length - 1]
  return `${d} L${last[0].toFixed(1)} ${last[1].toFixed(1)}`
}

function branch(r, from, depth, out, W, H) {
  const dir = r() < 0.5 ? -1 : 1
  let [x, y] = from
  const pts = [[x, y]]
  const steps = 3 + Math.floor(r() * 3)
  for (let i = 0; i < steps; i++) {
    x += dir * (18 + r() * 34)
    y += 16 + r() * 30
    if (y > H || x < 0 || x > W) break
    pts.push([x, y])
  }
  if (pts.length < 3) return
  out.push({ d: smooth(pts), w: depth === 1 ? 2.6 : 1.3 })
  if (depth === 1 && pts.length > 3 && r() < 0.6) branch(r, pts[2], 2, out, W, H)
}

export function buildRoots(seed, W, H, trunks) {
  const r = rng(seed)
  const out = []
  for (let t = 0; t < trunks; t++) {
    let x = ((t + 0.3 + r() * 0.5) / trunks) * W
    let y = 0
    const pts = [[x, 0]]
    while (y < H) {
      y += 38 + r() * 40
      x += (r() - 0.5) * 46
      pts.push([x, Math.min(y, H)])
    }
    out.push({ d: smooth(pts), w: 5 })
    pts.forEach((p, i) => {
      if (i > 1 && i < pts.length - 1 && r() < 0.65) branch(r, p, 1, out, W, H)
    })
  }
  return out
}

export default function RootLines({ seed = 7, height = 240, trunks = 6, tone = 'sage', className = '' }) {
  const W = 1200
  const roots = useMemo(() => buildRoots(seed, W, height, trunks), [seed, height, trunks])
  const [ref, shown] = useReveal()
  return (
    <svg
      ref={ref}
      className={`roots tone-${tone} ${shown ? 'in' : ''} ${className}`}
      viewBox={`0 0 ${W} ${height}`}
      preserveAspectRatio="xMidYMin slice"
      aria-hidden="true"
      focusable="false"
    >
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
        {roots.map((p, i) => (
          <path key={i} d={p.d} pathLength="1" strokeWidth={p.w} style={{ '--i': i }} />
        ))}
      </g>
    </svg>
  )
}
