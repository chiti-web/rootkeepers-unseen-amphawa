import Icon from './Icons.jsx'
import RootLines from './RootLines.jsx'
import { Reveal, SectionHead, Figure } from './Common.jsx'
import c from '../data/content.json'

/* ---------- ภาพรวมหมู่บ้าน ---------- */
export function Village() {
  const v = c.village
  return (
    <section className="section origin" id="village" aria-labelledby="village-title">
      <RootLines seed={9} height={190} trunks={7} tone="sage" className="top-roots" />
      <div className="wrap">
        <div className="split">
          <div>
            <Reveal className="head">
              <p className="eyebrow">{v.eyebrow}</p>
              <h2 id="village-title">{v.title}</h2>
            </Reveal>
            {v.paragraphs.map((p, i) => (
              <Reveal key={i} delay={i * 60}>
                <p className="prose">{p}</p>
              </Reveal>
            ))}
            <Reveal>
              <blockquote className="pull">
                <p>{v.quote}</p>
                <cite>{v.quoteBy}</cite>
              </blockquote>
            </Reveal>
            <Reveal>
              <p className="prose welcome">{v.welcome}</p>
            </Reveal>
          </div>
          <Reveal delay={120} className="split-media stack">
            <Figure id={v.image} sizes="(min-width: 900px) 420px, 92vw" />
            <Figure id={v.signImage} sizes="(min-width: 900px) 420px, 92vw" />
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
      </div>
    </section>
  )
}

/* ---------- ประมงชายฝั่ง ---------- */
export function Fishing() {
  const f = c.fishing
  return (
    <section className="section research" id="fishing" aria-labelledby="fishing-title">
      <div className="wrap">
        <SectionHead eyebrow={f.eyebrow} title={f.title} lead={f.lead} />
        <ul className="partner-grid" aria-label="อวนที่ใช้">
          {f.gear.map((g, i) => (
            <Reveal as="li" key={g.name} className="partner" delay={(i % 2) * 70}>
              <span className="partner-icon"><Icon name={g.icon} size={24} /></span>
              <div>
                <strong>{g.name}</strong>
                <span>{g.role}</span>
              </div>
            </Reveal>
          ))}
        </ul>
        <ol className="phases" aria-label="หนึ่งวันของชาวประมง">
          {f.steps.map((s, i) => (
            <Reveal as="li" key={s.label} delay={i * 90}>
              <span className="phase-dot">{i + 1}</span>
              <strong>{s.label}</strong>
              <span>{s.text}</span>
            </Reveal>
          ))}
        </ol>
        <div className="split fishing-split">
          <div>
            <Reveal>
              <ul className="ticks">
                {f.notes.map((n) => (
                  <li key={n}>{n}</li>
                ))}
              </ul>
            </Reveal>
            <Reveal>
              <p className="prose catch">{f.catch}</p>
            </Reveal>
          </div>
          <div className="stack">
            {f.images.map((id) => (
              <Reveal key={id}>
                <Figure id={id} sizes="(min-width: 900px) 440px, 92vw" />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ---------- ฤดูกาลและน้ำ ---------- */
export function Seasons() {
  const s = c.seasons
  return (
    <section className="section today" id="seasons" aria-labelledby="seasons-title">
      <RootLines seed={31} height={240} trunks={8} tone="mid" className="dark-roots" />
      <div className="wrap">
        <Reveal className="head on-dark">
          <p className="eyebrow on-dark">{s.eyebrow}</p>
          <h2 id="seasons-title">{s.title}</h2>
        </Reveal>
        <ul className="stat-grid">
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
          <h3 className="tide-title">{s.tideTitle}</h3>
        </Reveal>
        <ul className="stat-grid three tide">
          {s.tide.map((t, i) => (
            <Reveal as="li" key={t.title} className="stat" delay={i * 70}>
              <strong className="tide-head"><Icon name={t.icon} size={24} /> {t.title}</strong>
              <span>{t.text}</span>
            </Reveal>
          ))}
        </ul>
        <Reveal>
          <blockquote className="pull on-dark">
            <p>{s.quote}</p>
            <cite>{s.quoteBy}</cite>
          </blockquote>
        </Reveal>
      </div>
    </section>
  )
}

/* ---------- ป่าชายเลน ---------- */
export function Mangrove() {
  const m = c.mangrove
  return (
    <section className="section hatchery" id="mangrove" aria-labelledby="mangrove-title">
      <div className="wrap">
        <SectionHead eyebrow={m.eyebrow} title={m.title} lead={m.lead} />
        <ol className="spots">
          {m.spots.map((s, i) => (
            <Reveal as="li" key={s.title} className={`spot ${s.image ? 'has-img' : ''}`} delay={(i % 2) * 70}>
              {s.image ? (
                <Figure id={s.image} className="spot-fig" zoom sizes="(min-width: 900px) 520px, 92vw" />
              ) : (
                <div className="spot-tile" aria-hidden="true"><Icon name={s.icon} size={44} /></div>
              )}
              <div className="spot-body">
                <span className="spot-n">{i + 1}</span>
                <h3><Icon name={s.icon} size={22} /> {s.title}</h3>
                <p>{s.text}</p>
              </div>
            </Reveal>
          ))}
        </ol>
        <div className="eco-more">
          <h3>เรื่องเล่าจากป่าและชายฝั่ง</h3>
          {m.items.map((it, i) => (
            <Reveal key={it.title} delay={i * 40}>
              <details className="eco" name="eco" open={i === 1}>
                <summary>
                  <span className="eco-icon"><Icon name={it.icon} size={22} /></span>
                  <span className="eco-title">{it.title}</span>
                  <Icon name="arrow" size={18} className="eco-caret" />
                </summary>
                <p>{it.text}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
