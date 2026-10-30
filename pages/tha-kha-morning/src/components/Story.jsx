import Icon from './Icons.jsx'
import RootLines from './RootLines.jsx'
import { Reveal, SectionHead, Figure } from './Common.jsx'
import c from '../data/content.json'

/* ---------- ท่าเรือพาย ---------- */
export function Pier() {
  const v = c.pier
  return (
    <section className="section origin" id="pier" aria-labelledby="pier-title">
      <RootLines seed={9} height={190} trunks={7} tone="sage" className="top-roots" />
      <div className="wrap">
        <div className="split">
          <div>
            <Reveal className="head">
              <p className="eyebrow">{v.eyebrow}</p>
              <h2 id="pier-title">{v.title}</h2>
            </Reveal>
            {v.paragraphs.map((p, i) => (
              <Reveal key={i} delay={i * 60}>
                <p className="prose">{p}</p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={120} className="split-media stack">
            {v.images.map((id) => (
              <Figure key={id} id={id} sizes="(min-width: 900px) 420px, 92vw" />
            ))}
          </Reveal>
        </div>
        <ul className="act-grid facts">
          {v.facts.map((f, i) => (
            <Reveal as="li" key={f.value} className="act" delay={i * 70}>
              <h3>{f.value}</h3>
              <p>{f.label}</p>
            </Reveal>
          ))}
        </ul>
        <Reveal>
          <Figure id={v.wide} sizes="(min-width: 900px) 900px, 92vw" />
        </Reveal>
      </div>
    </section>
  )
}

/* ---------- เส้นทาง ---------- */
export function Route() {
  const r = c.route
  return (
    <section className="section research" id="route" aria-labelledby="route-title">
      <div className="wrap">
        <SectionHead eyebrow={r.eyebrow} title={r.title} lead={r.lead} />
        <div className="split fishing-split">
          <ul className="partner-grid one-col" aria-label="เรื่องของเส้นทาง">
            {r.items.map((g, i) => (
              <Reveal as="li" key={g.name} className="partner" delay={(i % 2) * 70}>
                <span className="partner-icon"><Icon name={g.icon} size={24} /></span>
                <div>
                  <strong>{g.name}</strong>
                  <span>{g.role}</span>
                </div>
              </Reveal>
            ))}
          </ul>
          <div className="stack">
            <Reveal>
              <Figure id={r.image} sizes="(min-width: 900px) 440px, 92vw" />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ---------- อุโมงค์ต้นไม้ ---------- */
export function Tunnel() {
  const t = c.tunnel
  return (
    <section className="section community" id="tunnel" aria-labelledby="tunnel-title">
      <div className="wrap">
        <SectionHead eyebrow={t.eyebrow} title={t.title} lead={t.lead} />
        <ol className="phases" aria-label="จุดเด่นของอุโมงค์ต้นไม้">
          {t.steps.map((s, i) => (
            <Reveal as="li" key={s.label} delay={(i % 3) * 90}>
              <span className="phase-dot">{i + 1}</span>
              <strong>{s.label}</strong>
              <span>{s.text}</span>
            </Reveal>
          ))}
        </ol>
        <div className="dish-grid three-up">
          {t.images.map((id) => (
            <Reveal key={id}>
              <Figure id={id} sizes="(min-width: 900px) 360px, 46vw" />
            </Reveal>
          ))}
        </div>
        <Reveal>
          <blockquote className="pull">
            <p>{t.quote}</p>
            <cite>{t.quoteBy}</cite>
          </blockquote>
        </Reveal>
        <Reveal>
          <p className="prose">{t.after}</p>
        </Reveal>
      </div>
    </section>
  )
}

/* ---------- ฟ้าฝน ---------- */
export function Weather() {
  const s = c.weather
  return (
    <section className="section today" id="weather" aria-labelledby="weather-title">
      <RootLines seed={31} height={240} trunks={8} tone="mid" className="dark-roots" />
      <div className="wrap">
        <Reveal className="head on-dark">
          <p className="eyebrow on-dark">{s.eyebrow}</p>
          <h2 id="weather-title">{s.title}</h2>
        </Reveal>
        <ul className="stat-grid three">
          {s.stats.map((t, i) => (
            <Reveal as="li" key={t.value} className="stat" delay={i * 70}>
              <strong>{t.value}</strong>
              <span>{t.label}</span>
            </Reveal>
          ))}
        </ul>
        {s.paragraphs.map((p, i) => (
          <Reveal key={i}>
            <p className="prose on-dark">{p}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
