import Icon from './Icons.jsx'
import RootLines from './RootLines.jsx'
import { Reveal, SectionHead, Figure } from './Common.jsx'
import c from '../data/content.json'

/* ---------- ในโรงเพาะ ---------- */
export function Hatchery() {
  const h = c.hatchery
  return (
    <section className="section hatchery" id="hatchery" aria-labelledby="hatchery-title">
      <div className="wrap">
        <SectionHead eyebrow={h.eyebrow} title={h.title} lead={h.lead} />
        <ol className="spots">
          {h.spots.map((s, i) => (
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
      </div>
    </section>
  )
}

/* ---------- ระบบนิเวศ ---------- */
export function Ecology() {
  const e = c.ecology
  return (
    <section className="section ecology" id="ecology" aria-labelledby="ecology-title">
      <div className="wrap">
        <SectionHead eyebrow={e.eyebrow} title={e.title} lead={e.lead} />
        <div className="eco-grid">
          <div className="eco-list">
            {e.items.map((it, i) => (
              <Reveal key={it.title} delay={i * 40}>
                <details className="eco" name="eco" open={i === 0}>
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
          <Reveal className="eco-media">
            <Figure id={e.image} sizes="(min-width: 900px) 380px, 92vw" />
          </Reveal>
        </div>
      </div>
    </section>
  )
}

/* ---------- วันปล่อย ---------- */
export function Release() {
  const r = c.release
  return (
    <section className="section release" id="release" aria-labelledby="release-title">
      <RootLines seed={47} height={220} trunks={8} tone="sand" className="earth-roots" />
      <div className="wrap">
        <Reveal className="head on-earth">
          <p className="eyebrow on-earth">{r.eyebrow}</p>
          <h2 id="release-title">{r.title}</h2>
        </Reveal>
        <ul className="stat-grid three">
          {r.facts.map((f, i) => (
            <Reveal as="li" key={f.value} className="stat on-earth" delay={i * 70}>
              <strong>{f.value}</strong>
              <span>{f.label}</span>
            </Reveal>
          ))}
        </ul>
        <div className="release-grid">
          <div>
            {r.paragraphs.map((p, i) => (
              <Reveal key={i} delay={i * 60}>
                <p className="prose on-earth">{p}</p>
              </Reveal>
            ))}
            <Reveal>
              <p className="care"><Icon name="shield" size={20} /> {r.care}</p>
            </Reveal>
          </div>
          <div className="release-media">
            {r.images.map((id) => (
              <Reveal key={id}>
                <Figure id={id} className="on-earth" sizes="(min-width: 900px) 480px, 92vw" />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
