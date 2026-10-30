import Header from './components/Header.jsx'
import PageBar from './components/PageBar.jsx'
import Hero from './components/Hero.jsx'
import { Pier, Route, Tunnel, Weather } from './components/Story.jsx'
import { Plants, Issues, Coconut, MarketSec, Activities, Visit, TripBand, Footer } from './components/Visit.jsx'
import site from './data/site.json'

export default function App() {
  return (
    <>
      <a className="skip" href="#pier">ข้ามไปเนื้อหา</a>
      <PageBar />
      <Header />
      <main id="main">
        <Hero />
        <Pier />
        <Route />
        <Tunnel />
        <Plants />
        <Issues />
        <Coconut />
        <MarketSec />
        <Weather />
        <Activities />
        <Visit />
        <TripBand />
      </main>
      <Footer />
    </>
  )
}
