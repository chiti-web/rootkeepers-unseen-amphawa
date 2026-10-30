import Header from './components/Header.jsx'
import PageBar from './components/PageBar.jsx'
import Hero from './components/Hero.jsx'
import { House, Smell, Process, Materials, Clock } from './components/Story.jsx'
import { Selling, Origin, Bay, Tasting, Activities, Visit, TripBand, Footer } from './components/Visit.jsx'
import { History, Flow } from './components/Flow.jsx'
import site from './data/site.json'

export default function App() {
  return (
    <>
      <a className="skip" href="#house">ข้ามไปเนื้อหา</a>
      <PageBar />
      <Header />
      <main id="main">
        <Hero />
        <House />
        <History />
        <Flow />
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
