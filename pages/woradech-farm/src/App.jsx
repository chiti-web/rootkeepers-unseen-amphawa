import Header from './components/Header.jsx'
import PageBar from './components/PageBar.jsx'
import Hero from './components/Hero.jsx'
import { Origin, Research, Today } from './components/Story.jsx'
import Lifecycle from './components/Lifecycle.jsx'
import { Hatchery, Ecology, Release } from './components/Places.jsx'
import { Visit, Community, TripBand, Footer } from './components/Visit.jsx'
import site from './data/site.json'

export default function App() {
  return (
    <>
      <a className="skip" href="#origin">ข้ามไปเนื้อหา</a>
      <PageBar />
      <Header />
      <main id="main">
        <Hero />
        <Origin />
        <Research />
        <Today />
        <Lifecycle />
        <Hatchery />
        <Ecology />
        <Release />
        <Visit />
        <Community />
        <TripBand />
      </main>
      <Footer />
    </>
  )
}
