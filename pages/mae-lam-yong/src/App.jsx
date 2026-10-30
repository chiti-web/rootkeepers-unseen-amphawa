import Header from './components/Header.jsx'
import PageBar from './components/PageBar.jsx'
import Hero from './components/Hero.jsx'
import { House, Smell, Process, Materials, Clock } from './components/Story.jsx'
import { Selling, Origin, Bay, Tasting, Activities, Visit, TripBand, Footer } from './components/Visit.jsx'
import site from './data/site.json'

export default function App() {
  return (
    <>
      <a className="skip" href="#house">ข้ามไปเนื้อหา</a>
      {site.draft && (
        <p className="draft-bar" role="note">
          ร่างภายใน ยังไม่เผยแพร่ · รอครอบครัวเจ้าของบ้านและผู้พาเที่ยวตรวจข้อความและภาพ
        </p>
      )}
      <PageBar />
      <Header />
      <main id="main">
        <Hero />
        <House />
        <Smell />
        <Process />
        <Materials />
        <Clock />
        <Selling />
        <Origin />
        <Bay />
        <Tasting />
        <Activities />
        <Visit />
        <TripBand />
      </main>
      <Footer />
    </>
  )
}
