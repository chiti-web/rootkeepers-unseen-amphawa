import Icon from './Icons.jsx'
import RootLines from './RootLines.jsx'
import { Reveal, SectionHead, Figure } from './Common.jsx'
import c from '../data/content.json'

/* ---------- ที่มา + ผู้ว่า ---------- */
export function Origin() {
  const o = c.origin
  const g = c.governor
  return (
    <section className="section origin" id="origin" aria-labelledby="origin-title">
      <RootLines seed={5} height={190} trunks={7} tone="sage" className="top-roots" />
      <div className="wrap">
        <div className="split">
          <div>
            <Reveal className="head">
              <p className="eyebrow">{o.eyebrow}</p>
              <h2 id="origin-title">{o.title}</h2>
            </Reveal>
            {o.paragraphs.map((p, i) => (
              <Reveal key={i} delay={i * 60}>
                <p className="prose">{p}</p>
              </Reveal>
            ))}
            <Reveal>
              <blockquote className="pull">
                <p>{o.quote}</p>
                <cite>{o.quoteBy}</cite>
              </blockquote>
            </Reveal>
          </div>
          <Reveal delay={120} className="split-media">
            <Figure id={o.image} sizes="(min-width: 900px) 420px, 92vw" />
          </Reveal>
        </div>

        <div className="governor">
          <Reveal className="head">
            <p className="eyebrow">{g.eyebrow}</p>
            <h2>{g.title}</h2>
          </Reveal>
          <div className="two-col">
            {g.paragraphs.map((p, i) => (
              <Reveal key={i} delay={i * 80}>
                <p className="prose">{p}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ---------- งานวิจัย ---------- */
export function Research() {
  const r = c.research
  return (
    <section className="section research" aria-labelledby="research-title">
      <div className="wrap">
        <SectionHead eyebrow={r.eyebrow} title={r.title} lead={r.lead} />
        <ul className="partner-grid">
          {r.partners.map((p, i) => (
            <Reveal as="li" key={p.name} className="partner" delay={(i % 2) * 70}>
              <span className="partner-icon"><Icon name={p.icon} size={24} /></span>
              <div>
                <strong>{p.name}</strong>
                <span>{p.role}</span>
              </div>
            </Reveal>
          ))}
        </ul>
        <ol className="phases" aria-label="ระยะของงานวิจัย">
          {r.phases.map((p, i) => (
            <Reveal as="li" key={p.label} delay={i * 90}>
              <span className="phase-dot">{i + 1}</span>
              <strong>{p.label}</strong>
              <span>{p.text}</span>
            </Reveal>
          ))}
        </ol>
        <Reveal>
          <Figure id={r.image} className="wide" sizes="(min-width: 1200px) 1100px, 92vw" />
        </Reveal>
      </div>
    </section>
  )
}

/* ---------- วันนี้ ---------- */
export function Today() {
  const t = c.today
  return (
    <section className="section today" aria-labelledby="today-title">
      <RootLines seed={31} height={240} trunks={8} tone="mid" className="dark-roots" />
      <div className="wrap">
        <Reveal className="head on-dark">
          <p className="eyebrow on-dark">{t.eyebrow}</p>
          <h2 id="today-title">{t.title}</h2>
        </Reveal>
        <ul className="stat-grid">
          {t.stats.map((s, i) => (
            <Reveal as="li" key={s.value} className="stat" delay={i * 70}>
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </Reveal>
          ))}
        </ul>
        <Reveal>
          <blockquote className="pull on-dark">
            <p>{t.quote}</p>
            <cite>{t.quoteBy}</cite>
          </blockquote>
        </Reveal>
        <Reveal>
          <p className="prose on-dark keeper">{t.keeper}</p>
        </Reveal>
      </div>
    </section>
  )
}
