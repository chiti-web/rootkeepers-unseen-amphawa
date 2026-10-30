import Icon from './Icons.jsx'
import RootLines from './RootLines.jsx'
import { Reveal, SectionHead, Figure } from './Common.jsx'
import c from '../data/content.json'

/* ---------- ท่าคาตอนค่ำ ---------- */
export function Evening() {
  const v = c.evening
  return (
    <section className="section origin" id="evening" aria-labelledby="evening-title">
      <RootLines seed={9} height={190} trunks={7} tone="sage" className="top-roots" />
      <div className="wrap">
        <div className="split">
          <div>
            <Reveal className="head">
              <p className="eyebrow">{v.eyebrow}</p>
              <h2 id="evening-title">{v.title}</h2>
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

/* ---------- เรือแจว ---------- */
export function BoatSec() {
  const b = c.boat
  return (
    <section className="section research" id="boat" aria-labelledby="boat-title">
      <div className="wrap">
        <SectionHead eyebrow={b.eyebrow} title={b.title} lead={b.lead} />
        <ul className="partner-grid" aria-label="เรื่องของเรือแจว">
          {b.items.map((g, i) => (
            <Reveal as="li" key={g.name} className="partner" delay={(i % 2) * 70}>
              <span className="partner-icon"><Icon name={g.icon} size={24} /></span>
              <div>
                <strong>{g.name}</strong>
                <span>{g.role}</span>
              </div>
            </Reveal>
          ))}
        </ul>
        <Reveal>
          <h3 className="price-title">{b.pricesTitle}</h3>
        </Reveal>
        <ul className="food-list price-list">
          {b.prices.map((p, i) => (
            <Reveal as="li" key={p.value} delay={i * 60}>
              <strong>{p.value}</strong>
              <span>{p.label}</span>
            </Reveal>
          ))}
        </ul>
        <div className="split fishing-split">
          <div>
            <Reveal>
              <p className="prose">{b.group}</p>
            </Reveal>
            <Reveal>
              <p className="safety"><Icon name="shield" size={20} /> {b.safety}</p>
            </Reveal>
          </div>
          <div className="stack">
            <Reveal>
              <Figure id={b.image} sizes="(min-width: 900px) 440px, 92vw" />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ---------- หิ่งห้อย ---------- */
export function Fireflies() {
  const f = c.fireflies
  return (
    <section className="section hatchery" id="fireflies" aria-labelledby="fireflies-title">
      <div className="wrap">
        <SectionHead eyebrow={f.eyebrow} title={f.title} lead={f.lead} />
        <div className="split fishing-split">
          <ul className="partner-grid one-col" aria-label="ข้อมูลหิ่งห้อย">
            {f.items.map((g, i) => (
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
              <Figure id={f.image} sizes="(min-width: 900px) 440px, 92vw" />
            </Reveal>
          </div>
        </div>
        <Reveal>
          <h3 className="price-title">{f.seasonTitle}</h3>
          <p className="prose">{f.season}</p>
        </Reveal>
      </div>
    </section>
  )
}

/* ---------- เส้นทาง ---------- */
export function Route() {
  const r = c.route
  return (
    <section className="section community" id="route" aria-labelledby="route-title">
      <div className="wrap">
        <SectionHead eyebrow={r.eyebrow} title={r.title} lead={r.lead} />
        <ol className="phases" aria-label="จุดเด่นของเส้นทาง">
          {r.steps.map((s, i) => (
            <Reveal as="li" key={s.label} delay={(i % 3) * 90}>
              <span className="phase-dot">{i + 1}</span>
              <strong>{s.label}</strong>
              <span>{s.text}</span>
            </Reveal>
          ))}
        </ol>
        <div className="two-col media-pair">
          {r.images.map((id) => (
            <Reveal key={id}>
              <Figure id={id} sizes="(min-width: 900px) 440px, 92vw" />
            </Reveal>
          ))}
        </div>
        <Reveal>
          <blockquote className="pull">
            <p>{r.quote}</p>
            <cite>{r.quoteBy}</cite>
          </blockquote>
        </Reveal>
        <Reveal>
          <p className="prose">{r.after}</p>
        </Reveal>
      </div>
    </section>
  )
}

/* ---------- ความมืด ---------- */
export function Dark() {
  const s = c.dark
  return (
    <section className="section today" id="dark" aria-labelledby="dark-title">
      <RootLines seed={31} height={240} trunks={8} tone="mid" className="dark-roots" />
      <div className="wrap">
        <Reveal className="head on-dark">
          <p className="eyebrow on-dark">{s.eyebrow}</p>
          <h2 id="dark-title">{s.title}</h2>
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
        <Reveal>
          <h3 className="tide-title">{s.highlightTitle}</h3>
        </Reveal>
        <div className="split fishing-split">
          <Reveal>
            <p className="prose on-dark">{s.highlight}</p>
          </Reveal>
          <Reveal>
            <Figure id={s.image} className="on-earth" sizes="(min-width: 900px) 440px, 92vw" />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
