import destinations from './data/destinations.json'

export default function App() {
  return (
    <>
      <a className="skip" href="#places">ข้ามไปจุดหมาย</a>
      <header className="top">
        <a className="brand" href="./"><img src="./brand/symbol-reverse.png" alt="" className="logo" /><span>ฝากราก | ROOTKEEPERS</span></a>
        <span className="release">Release 1.0</span>
      </header>
      <main>
        <section className="hero" aria-labelledby="hero-title">
          <p className="kicker">ทริปต้นแบบ Unseen Amphawa · 30–31 ต.ค. 2569</p>
          <h1 id="hero-title">Unseen Amphawa</h1>
          <p className="lead">
            ห้าจุดหมายที่ทีม ฝากราก ไปสำรวจจริงในวันที่ 20–21 ก.ย. 2569 ที่อัมพวา–แม่กลอง
            เล่าผ่านคำบอกเล่าของคนทำงานในพื้นที่ ภาพถ่ายจริง และคลิปสั้นทีละจุด
          </p>
          <p className="release-note">Release แรก: ข้อมูลจากการสำรวจ 20–21 ก.ย. 2569</p>
          <a className="cta" href="#places">เลือกดูทีละจุดหมาย</a>
        </section>

        <section id="places" className="places" aria-labelledby="places-title">
          <h2 id="places-title">5 จุดหมายจากการสำรวจ</h2>
          <ul className="grid">
            {destinations.map((d) => (
              <li key={d.slug} className="card">
                <a className="card-img" href={`./${d.slug}/`} tabIndex={-1} aria-hidden="true">
                  <img src={d.image} alt="" loading="lazy" />
                </a>
                <div className="card-body">
                  <p className="card-kicker">{d.kicker}</p>
                  <h3><a href={`./${d.slug}/`}>{d.name}</a></h3>
                  <p className="card-text">{d.headline}</p>
                  <p className="card-links">
                    <a className="btn" href={`./${d.slug}/`}>อ่านเรื่องราว</a>
                    <a className="btn ghost" href={d.youtube} target="_blank" rel="noopener noreferrer">ดูคลิป YouTube ↗</a>
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className="about" aria-labelledby="about-title">
          <h2 id="about-title">เกี่ยวกับเว็บนี้</h2>
          <p>
            เนื้อหามาจากการสังเกตและบทสนทนาภาคสนามของทีมสำรวจ ตัวเลขทั้งหมดเป็นค่าที่ผู้เล่าให้ ณ วันสำรวจ
            ไม่ใช่ราคาหรือข้อเสนอที่ประกาศ ภาพกราฟิกและเสียงบรรยายในคลิปสร้างด้วย AI ภาพถ่ายและวิดีโอมาจากการสำรวจจริง
            ทุกจุดหมายเป็นพื้นที่ของชุมชนและครอบครัว ควรติดต่อล่วงหน้าก่อนไปเยือนเสมอ
          </p>
        </section>
      </main>
      <footer className="foot">
        <img src="./brand/symbol-reverse.png" alt="" className="foot-mark" />
        <p>ฝากราก | ROOTKEEPERS · ทริปต้นแบบ Unseen Amphawa</p>
        <p className="small">Release 1.0 · ข้อมูลจากการสำรวจ 20–21 ก.ย. 2569</p>
      </footer>
    </>
  )
}
