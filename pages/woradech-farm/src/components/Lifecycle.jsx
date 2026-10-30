import { useRef, useState } from 'react'
import Icon from './Icons.jsx'
import { Reveal, SectionHead, Figure } from './Common.jsx'
import c from '../data/content.json'

const EXTRA = { 8: 'seedImage', 10: 'harvestImage' }

export default function Lifecycle() {
  const L = c.lifecycle
  const [i, setI] = useState(0)
  const railRef = useRef(null)
  const s = L.stages[i]
  const go = (n) => {
    const k = Math.max(0, Math.min(L.stages.length - 1, n))
    setI(k)
    const el = railRef.current?.querySelector(`[data-i="${k}"]`)
    el?.scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' })
  }
  const onKey = (e) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') { e.preventDefault(); go(i + 1); railRef.current?.querySelector(`[data-i="${Math.min(i + 1, L.stages.length - 1)}"]`)?.focus() }
    if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') { e.preventDefault(); go(i - 1); railRef.current?.querySelector(`[data-i="${Math.max(i - 1, 0)}"]`)?.focus() }
  }
  const extra = EXTRA[s.n] && L[EXTRA[s.n]]

  return (
    <section className="section lifecycle" id="lifecycle" aria-labelledby="lifecycle-title">
      <div className="wrap">
        <SectionHead eyebrow={L.eyebrow} title={L.title} lead={L.lead} />
        <div className="life-grid">
          <Reveal className="life-poster">
            <Figure id={L.posterImage} sizes="(min-width: 900px) 420px, 92vw" />
          </Reveal>
          <div className="life-main">
            <div className="rail-scroll">
            <div className="rail" role="tablist" aria-label="10 ขั้นของชีวิตหอยแครง" ref={railRef} onKeyDown={onKey}>
              <span className="rail-line" aria-hidden="true">
                <span style={{ width: `${(i / (L.stages.length - 1)) * 100}%` }} />
              </span>
              {L.stages.map((st, k) => (
                <button
                  key={st.n}
                  role="tab"
                  id={`stage-${st.n}`}
                  data-i={k}
                  aria-selected={k === i}
                  aria-controls="stage-panel"
                  tabIndex={k === i ? 0 : -1}
                  className={`rail-node ${k <= i ? 'is-done' : ''}`}
                  onClick={() => setI(k)}
                  aria-label={`ขั้นที่ ${st.n} ${st.title}`}
                >
                  {st.n}
                </button>
              ))}
            </div>
            </div>
            <div className="stage" role="tabpanel" id="stage-panel" aria-labelledby={`stage-${s.n}`} key={s.n}>
              <p className="stage-count">ขั้นที่ {s.n} จาก {L.stages.length}</p>
              <h3>
                <span className="stage-icon"><Icon name={s.icon} size={26} /></span>
                {s.title}
              </h3>
              <p className="stage-meta">{s.meta}</p>
              <p className="prose">{s.text}</p>
              {extra && <Figure id={extra} className="stage-fig" sizes="(min-width: 900px) 420px, 92vw" />}
              {s.n >= 3 && s.n <= 6 && <p className="stage-hint">ดูภาพจากกล้องจุลทรรศน์ของระยะนี้ได้ที่ป้ายด้านข้าง</p>}
            </div>
            <div className="stage-nav">
              <button className="btn btn-outline" onClick={() => go(i - 1)} disabled={i === 0}>
                <Icon name="arrow" size={18} className="flip" /> ขั้นก่อนหน้า
              </button>
              <button className="btn btn-primary" onClick={() => go(i + 1)} disabled={i === L.stages.length - 1}>
                ขั้นถัดไป <Icon name="arrow" size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
