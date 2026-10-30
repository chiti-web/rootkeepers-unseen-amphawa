import Icon from './Icons.jsx'
import { Reveal, SectionHead, Figure } from './Common.jsx'
import c from '../data/content.json'
import site from '../data/site.json'
import { asset } from '../lib/helpers.js'

/* ---------- มาเยือน + อาหาร ---------- */
export function Visit() {
  const v = c.visit
  const f = c.food
  return (
    <section className="section visit" id="visit" aria-labelledby="visit-title">
      <div className="wrap">
        <SectionHead eyebrow={v.eyebrow} title={v.title} lead={v.lead} />
        <ul className="act-grid">
          {v.activities.map((a, i) => (
            <Reveal as="li" key={a.title} className="act" delay={(i % 3) * 70}>
              <span className="act-icon"><Icon name={a.icon} size={26} /></span>
              <h3>{a.title}</h3>
              <p>{a.text}</p>
            </Reveal>
          ))}
        </ul>
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

        <div className="food" id="food">
          <SectionHead eyebrow={f.eyebrow} title={f.title} />
          <div className="food-grid">
            <ul className="food-list">
              {f.items.map((it, i) => (
                <Reveal as="li" key={it.title} delay={(i % 2) * 60}>
                  <strong>{it.title}</strong>
                  <span>{it.text}</span>
                </Reveal>
              ))}
            </ul>
            <div className="food-media">
              {f.images.map((id) => (
                <Reveal key={id}>
                  <Figure id={id} sizes="(min-width: 900px) 260px, 46vw" />
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal>
            <p className="prose">{f.nutrition}</p>
            <p className="safety"><Icon name="shield" size={20} /> {f.safety}</p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

/* ---------- ชุมชนได้อะไร + สืบทอด ---------- */
export function Community() {
  const m = c.community
  const fu = c.future
  return (
    <section className="section community" aria-labelledby="community-title">
      <div className="wrap">
        <SectionHead eyebrow={m.eyebrow} title={m.title} lead={m.lead} />
        <ul className="act-grid">
          {m.items.map((a, i) => (
            <Reveal as="li" key={a.title} className="act" delay={(i % 3) * 70}>
              <span className="act-icon"><Icon name={a.icon} size={26} /></span>
              <h3>{a.title}</h3>
              <p>{a.text}</p>
            </Reveal>
          ))}
        </ul>
        <Reveal>
          <p className="promise-line">{m.promise}</p>
        </Reveal>

        <div className="future">
          <Reveal>
            <p className="eyebrow">{fu.eyebrow}</p>
            <h2>{fu.title}</h2>
            <p className="prose">{fu.text}</p>
            <p className="closing">{fu.closing}</p>
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
