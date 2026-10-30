import c from '../data/content.json'
import { Reveal, SectionHead } from './Common.jsx'

export function History() {
  const h = c.history
  return (
    <section className="section" id="history" aria-labelledby="history-title">
      <div className="wrap">
        <SectionHead eyebrow={h.eyebrow} title={h.title} lead={h.lead} />
        <ol className="hist-grid" aria-label="ประวัติปลาทู">
          {h.items.map((it, i) => (
            <Reveal as="li" key={it.title} delay={(i % 4) * 90} className="hist-card">
              <span className="hist-n">{i + 1}</span>
              <strong>{it.title}</strong>
              <span>{it.text}</span>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}

export function Flow() {
  const f = c.flow
  return (
    <section className="section hatchery" id="flow" aria-labelledby="flow-title">
      <div className="wrap">
        <SectionHead eyebrow={f.eyebrow} title={f.title} lead={f.lead} />
        <ol className="flow-list" aria-label="สายธารปลาทูหนึ่งตัว">
          {f.steps.map((s, i) => (
            <Reveal as="li" key={s} delay={(i % 3) * 70}>
              <span className="flow-n">{i + 1}</span>
              <span>{s}</span>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
