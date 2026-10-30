import Icon from './Icons.jsx'
import { Reveal, SectionHead } from './Common.jsx'
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

/* ---------- ตลาดและราคา ---------- */
export function Selling() {
  const s = c.selling
  return (
    <section className="section community" id="selling" aria-labelledby="selling-title">
      <div className="wrap">
        <SectionHead eyebrow={s.eyebrow} title={s.title} lead={s.lead} />
        <Cards items={s.items} />
        <Reveal>
          <h3 className="price-title">{s.priceTitle}</h3>
        </Reveal>
        <ul className="food-list price-list">
          {s.prices.map((p, i) => (
            <Reveal as="li" key={p.value} delay={i * 60}>
              <strong>{p.value}</strong>
              <span>{p.label}</span>
            </Reveal>
          ))}
        </ul>
        <Reveal>
          <p className="prose">{s.priceNote}</p>
        </Reveal>
        <Reveal>
          <p className="promise-line">{s.insight}</p>
        </Reveal>
      </div>
    </section>
  )
}

/* ---------- แหล่งปลา ---------- */
export function Origin() {
  const o = c.origin
  return (
    <section className="section visit" id="origin" aria-labelledby="origin-title">
      <div className="wrap">
        <SectionHead eyebrow={o.eyebrow} title={o.title} lead={o.lead} />
        <Cards items={o.items} />
        <Reveal>
          <p className="promise-line">{o.promise}</p>
        </Reveal>
      </div>
    </section>
  )
}

/* ---------- ทะเลหนึ่งอ่าว ---------- */
export function Bay() {
  const b = c.bay
  return (
    <section className="section hatchery" id="bay" aria-labelledby="bay-title">
      <div className="wrap">
        <SectionHead eyebrow={b.eyebrow} title={b.title} lead={b.lead} />
        <div className="eco-more">
          {b.items.map((it, i) => (
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
        <Reveal>
          <p className="prose">{b.closing}</p>
        </Reveal>
      </div>
    </section>
  )
}

/* ---------- กินตอนที่ยังร้อน ---------- */
export function Tasting() {
  const t = c.tasting
  return (
    <section className="section community food-section" id="tasting" aria-labelledby="tasting-title">
      <div className="wrap">
        <Reveal className="head">
          <p className="eyebrow">{t.eyebrow}</p>
          <h2 id="tasting-title">{t.title}</h2>
        </Reveal>
        <div className="split food-split">
          <div>
            {t.paragraphs.map((p, i) => (
              <Reveal key={i} delay={i * 60}>
                <p className="prose">{p}</p>
              </Reveal>
            ))}
          </div>
          <div>
            <Reveal>
              <blockquote className="pull">
                <p>{t.quote}</p>
                <cite>{t.quoteBy}</cite>
              </blockquote>
            </Reveal>
            <ul className="food-list one">
              {t.facts.map((it, i) => (
                <Reveal as="li" key={it.title} delay={(i % 2) * 60}>
                  <strong>{it.title}</strong>
                  <span>{it.text}</span>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
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
