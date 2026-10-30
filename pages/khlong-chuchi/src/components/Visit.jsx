import Icon from './Icons.jsx'
import RootLines from './RootLines.jsx'
import { Reveal, SectionHead, Figure } from './Common.jsx'
import c from '../data/content.json'
import site from '../data/site.json'
import { asset } from '../lib/helpers.js'

function Status({ value }) {
  if (!value) return null
  return <span className={`badge badge-${value}`}>{c.statusLabels[value]}</span>
}

function Cards({ items }) {
  return (
    <ul className="act-grid">
      {items.map((a, i) => (
        <Reveal as="li" key={a.title} className="act" delay={(i % 3) * 70}>
          <span className="act-icon"><Icon name={a.icon} size={26} /></span>
          <Status value={a.status} />
          <h3>{a.title}</h3>
          <p>{a.text}</p>
        </Reveal>
      ))}
    </ul>
  )
}

/* ---------- ชุมชนและภูมิปัญญา ---------- */
export function Community() {
  const m = c.community
  return (
    <section className="section community" id="community" aria-labelledby="community-title">
      <div className="wrap">
        <SectionHead eyebrow={m.eyebrow} title={m.title} lead={m.lead} />
        <Cards items={m.items} />
        <div className="two-col media-pair">
          {m.images.map((id) => (
            <Reveal key={id}>
              <Figure id={id} sizes="(min-width: 900px) 560px, 92vw" />
            </Reveal>
          ))}
        </div>
        <Reveal>
          <p className="promise-line">{m.promise}</p>
        </Reveal>
      </div>
    </section>
  )
}

/* ---------- กิจกรรม ---------- */
export function Activities() {
  const a = c.activities
  return (
    <section className="section visit" id="activities" aria-labelledby="activities-title">
      <div className="wrap">
        <SectionHead eyebrow={a.eyebrow} title={a.title} lead={a.lead} />
        <Cards items={a.items} />
      </div>
    </section>
  )
}

/* ---------- เรือและความปลอดภัย ---------- */
export function Boats() {
  const b = c.boats
  return (
    <section className="section release" id="boats" aria-labelledby="boats-title">
      <RootLines seed={47} height={220} trunks={8} tone="sand" className="earth-roots" />
      <div className="wrap">
        <Reveal className="head on-earth">
          <p className="eyebrow on-earth">{b.eyebrow}</p>
          <h2 id="boats-title">{b.title}</h2>
        </Reveal>
        <ul className="stat-grid three">
          {b.facts.map((f, i) => (
            <Reveal as="li" key={f.value} className="stat on-earth" delay={i * 70}>
              <strong>{f.value}</strong>
              <span>{f.label}</span>
            </Reveal>
          ))}
        </ul>
        <div className="release-grid">
          <div>
            {b.paragraphs.map((p, i) => (
              <Reveal key={i} delay={i * 60}>
                <p className="prose on-earth">{p}</p>
              </Reveal>
            ))}
            <Reveal>
              <p className="care"><Icon name="shield" size={20} /> {b.care}</p>
            </Reveal>
          </div>
          <Reveal className="release-media">
            <Figure id={b.image} className="on-earth" sizes="(min-width: 900px) 480px, 92vw" />
          </Reveal>
        </div>
      </div>
    </section>
  )
}

/* ---------- อาหาร ---------- */
export function Food() {
  const f = c.food
  return (
    <section className="section community food-section" id="food" aria-labelledby="food-title">
      <div className="wrap">
        <Reveal className="head">
          <p className="eyebrow">{f.eyebrow}</p>
          <h2 id="food-title">{f.title}</h2>
        </Reveal>
        <div className="split food-split">
          <div>
            {f.paragraphs.map((p, i) => (
              <Reveal key={i} delay={i * 60}>
                <p className="prose">{p}</p>
              </Reveal>
            ))}
            <ul className="food-list one">
              {f.facts.map((it, i) => (
                <Reveal as="li" key={it.title} delay={(i % 2) * 60}>
                  <strong>{it.title}</strong>
                  <span>{it.text}</span>
                </Reveal>
              ))}
            </ul>
          </div>
          <div className="stack">
            {f.images.map((id) => (
              <Reveal key={id}>
                <Figure id={id} sizes="(min-width: 900px) 440px, 92vw" />
              </Reveal>
            ))}
          </div>
        </div>
        <div className="dishes">
          <Reveal>
            <h3>{f.dishesTitle}</h3>
            <p className="prose">{f.dishesText}</p>
          </Reveal>
          <div className="dish-grid">
            {f.dishes.map((id) => (
              <Reveal key={id}>
                <Figure id={id} sizes="(min-width: 900px) 280px, 46vw" />
              </Reveal>
            ))}
          </div>
          <Reveal>
            <p className="safety"><Icon name="shield" size={20} /> {f.enough}</p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

/* ---------- มาเยือนอย่างพอดี ---------- */
export function Visit() {
  const v = c.visit
  return (
    <section className="section visit" id="visit" aria-labelledby="visit-title">
      <div className="wrap">
        <SectionHead eyebrow={v.eyebrow} title={v.title} lead={v.lead} />
        <div className="visit-note">
          <Reveal className="capacity">
            <Icon name="people" size={28} />
            <p>{v.capacity}</p>
          </Reveal>
          <Reveal className="tips">
            <h3>{v.tipsTitle}</h3>
            <ul className="ticks">
              {v.tips.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </Reveal>
        </div>
        <div className="future">
          <Reveal>
            <p className="closing">{v.closing}</p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

/* ---------- ทริป + Footer ---------- */
export function TripBand() {
  const t = c.trip
  return (
    <section className="cta-band" id="trip" aria-labelledby="trip-title">
      <div className="wrap cta-row">
        <div>
          <p className="eyebrow on-dark">{t.eyebrow}</p>
          <h2 id="trip-title">{t.title}</h2>
          <p className="cta-when">{t.when}</p>
          <p className="cta-what">{t.what}</p>
          <p className="cta-small">{t.contact}</p>
        </div>
        <p className="cta-foot">{t.footnote}</p>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-row">
        <img src={asset('brand/symbol-reverse.png')} alt={site.brand} width="96" height="93" />
        <div>
          <p className="footer-brand">{site.brand}</p>
          <p>ทุกการเดินทาง ควรฝากบางสิ่งไว้ให้เติบโต</p>
          <p className="footer-small">{site.caveat}</p>
          <p className="footer-small">{site.imageNote}</p>
          <p className="footer-small">{site.source} · {site.version}</p>
        </div>
      </div>
    </footer>
  )
}
