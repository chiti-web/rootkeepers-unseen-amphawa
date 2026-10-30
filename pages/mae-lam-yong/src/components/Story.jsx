import Icon from './Icons.jsx'
import RootLines from './RootLines.jsx'
import { Reveal, SectionHead, Figure } from './Common.jsx'
import c from '../data/content.json'

/* ---------- บ้านและครอบครัว ---------- */
export function House() {
  const v = c.house
  return (
    <section className="section origin" id="house" aria-labelledby="house-title">
      <RootLines seed={9} height={190} trunks={7} tone="sage" className="top-roots" />
      <div className="wrap">
        <div className="split">
          <div>
            <Reveal className="head">
              <p className="eyebrow">{v.eyebrow}</p>
              <h2 id="house-title">{v.title}</h2>
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
      </div>
    </section>
  )
}

/* ---------- ปลาที่ไม่คาว ---------- */
export function Smell() {
  const s = c.smell
  return (
    <section className="section research" id="smell" aria-labelledby="smell-title">
      <div className="wrap">
        <SectionHead eyebrow={s.eyebrow} title={s.title} lead={s.lead} />
        <div className="split fishing-split">
          <div>
            {s.paragraphs.map((p, i) => (
              <Reveal key={i} delay={i * 60}>
                <p className="prose">{p}</p>
              </Reveal>
            ))}
          </div>
          <div className="stack">
            <Reveal>
              <Figure id={s.image} sizes="(min-width: 900px) 440px, 92vw" />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ---------- กระบวนการ ---------- */
export function Process() {
  const p = c.process
  return (
    <section className="section hatchery" id="process" aria-labelledby="process-title">
      <div className="wrap">
        <SectionHead eyebrow={p.eyebrow} title={p.title} lead={p.lead} />
        <ol className="phases" aria-label="ขั้นตอนทำปลาทู">
          {p.steps.map((s, i) => (
            <Reveal as="li" key={s.label} delay={(i % 3) * 90}>
              <span className="phase-dot">{i + 1}</span>
              <strong>{s.label}</strong>
              <span>{s.text}</span>
            </Reveal>
          ))}
        </ol>
        <div className="dish-grid three-up">
          {p.gallery1.map((id) => (
            <Reveal key={id}>
              <Figure id={id} sizes="(min-width: 900px) 360px, 46vw" />
            </Reveal>
          ))}
        </div>
        {p.paragraphs.map((t, i) => (
          <Reveal key={i}>
            <p className="prose">{t}</p>
          </Reveal>
        ))}
        <div className="dish-grid three-up">
          {p.gallery2.map((id) => (
            <Reveal key={id}>
              <Figure id={id} sizes="(min-width: 900px) 360px, 46vw" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------- วัตถุดิบ ---------- */
export function Materials() {
  const m = c.materials
  return (
    <section className="section research" id="materials" aria-labelledby="materials-title">
      <div className="wrap">
        <SectionHead eyebrow={m.eyebrow} title={m.title} lead={m.lead} />
        <ul className="partner-grid" aria-label="วัตถุดิบ">
          {m.items.map((g, i) => (
            <Reveal as="li" key={g.name} className="partner" delay={(i % 2) * 70}>
              <span className="partner-icon"><Icon name={g.icon} size={24} /></span>
              <div>
                <strong>{g.name}</strong>
                <span>{g.role}</span>
              </div>
            </Reveal>
          ))}
        </ul>
        <div className="two-col media-pair">
          {m.images.map((id) => (
            <Reveal key={id}>
              <Figure id={id} sizes="(min-width: 900px) 440px, 92vw" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------- เวลาที่กลับด้าน ---------- */
export function Clock() {
  const s = c.clock
  return (
    <section className="section today" id="clock" aria-labelledby="clock-title">
      <RootLines seed={31} height={240} trunks={8} tone="mid" className="dark-roots" />
      <div className="wrap">
        <Reveal className="head on-dark">
          <p className="eyebrow on-dark">{s.eyebrow}</p>
          <h2 id="clock-title">{s.title}</h2>
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
          <h3 className="tide-title">{s.optionsTitle}</h3>
        </Reveal>
        <ul className="stat-grid three tide">
          {s.options.map((t, i) => (
            <Reveal as="li" key={t.title} className="stat" delay={i * 70}>
              <strong className="tide-head"><Icon name={t.icon} size={24} /> {t.title}</strong>
              <span>{t.text}</span>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
