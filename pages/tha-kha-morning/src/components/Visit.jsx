import Icon from './Icons.jsx'
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

function Partners({ items, label }) {
  return (
    <ul className="partner-grid" aria-label={label}>
      {items.map((g, i) => (
        <Reveal as="li" key={g.name} className="partner" delay={(i % 2) * 70}>
          <span className="partner-icon"><Icon name={g.icon} size={24} /></span>
          <div>
            <strong>{g.name}</strong>
            <span>{g.role}</span>
          </div>
        </Reveal>
      ))}
    </ul>
  )
}

/* ---------- ต้นไม้และสัตว์ ---------- */
export function Plants() {
  const p = c.plants
  return (
    <section className="section research" id="plants" aria-labelledby="plants-title">
      <div className="wrap">
        <SectionHead eyebrow={p.eyebrow} title={p.title} lead={p.lead} />
        <div className="split fishing-split">
          <ul className="partner-grid one-col" aria-label="ต้นไม้ริมคลอง">
            {p.items.map((g, i) => (
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
              <Figure id={p.image} sizes="(min-width: 900px) 440px, 92vw" />
            </Reveal>
          </div>
        </div>
        <Reveal>
          <h3 className="price-title">{p.wildlifeTitle}</h3>
        </Reveal>
        <Cards items={p.wildlife} />
      </div>
    </section>
  )
}

/* ---------- สะพาน เรือ ขยะ ---------- */
export function Issues() {
  const b = c.issues
  return (
    <section className="section hatchery" id="issues" aria-labelledby="issues-title">
      <div className="wrap">
        <SectionHead eyebrow={b.eyebrow} title={b.title} />
        <div className="split fishing-split">
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

/* ---------- สวนมะพร้าว ---------- */
export function Coconut() {
  const k = c.coconut
  return (
    <section className="section community" id="coconut" aria-labelledby="coconut-title">
      <div className="wrap">
        <SectionHead eyebrow={k.eyebrow} title={k.title} lead={k.lead} />
        <div className="dish-grid three-up">
          {k.gallery1.map((id) => (
            <Reveal key={id}>
              <Figure id={id} sizes="(min-width: 900px) 360px, 46vw" />
            </Reveal>
          ))}
        </div>
        <Reveal>
          <h3 className="price-title">{k.howTitle}</h3>
        </Reveal>
        <ul className="food-list price-list">
          {k.how.map((p, i) => (
            <Reveal as="li" key={p.title} delay={i * 60}>
              <strong>{p.title}</strong>
              <span>{p.text}</span>
            </Reveal>
          ))}
        </ul>
        <Reveal>
          <h3 className="price-title">{k.chooseTitle}</h3>
        </Reveal>
        <Partners items={k.choose} label="วิธีเลือกมะพร้าว" />
        <Reveal>
          <h3 className="price-title">{k.factsTitle}</h3>
        </Reveal>
        <ul className="act-grid facts">
          {k.facts.map((f, i) => (
            <Reveal as="li" key={f.value} className="act" delay={i * 70}>
              <h3>{f.value}</h3>
              <p>{f.label}</p>
            </Reveal>
          ))}
        </ul>
        <Reveal>
          <h3 className="price-title">{k.tasteTitle}</h3>
          <p className="prose">{k.taste}</p>
        </Reveal>
        <div className="two-col media-pair">
          {k.gallery2.map((id) => (
            <Reveal key={id}>
              <Figure id={id} sizes="(min-width: 900px) 440px, 92vw" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------- ตลาดซบเซา ---------- */
export function MarketSec() {
  const m = c.market
  return (
    <section className="section visit" id="market" aria-labelledby="market-title">
      <div className="wrap">
        <SectionHead eyebrow={m.eyebrow} title={m.title} />
        <Cards items={m.items} />
      </div>
    </section>
  )
}

/* ---------- กิจกรรม ---------- */
export function Activities() {
  const a = c.activities
  return (
    <section className="section community" id="activities" aria-labelledby="activities-title">
      <div className="wrap">
        <SectionHead eyebrow={a.eyebrow} title={a.title} lead={a.lead} />
        <Cards items={a.items} />
      </div>
    </section>
  )
}

/* ---------- เตรียมตัวมาเยือน ---------- */
export function Visit() {
  const v = c.visit
  return (
    <section className="section visit" id="visit" aria-labelledby="visit-title">
      <div className="wrap">
        <SectionHead eyebrow={v.eyebrow} title={v.title} lead={v.lead} />
        <div className="visit-note">
          <Reveal className="capacity">
            <Icon name="clock" size={28} />
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
