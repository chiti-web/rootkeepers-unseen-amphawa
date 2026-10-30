import Header from './components/Header.jsx'
import PageBar from './components/PageBar.jsx'
import Hero from './components/Hero.jsx'
import { Evening, BoatSec, Fireflies, Route, Dark } from './components/Story.jsx'
import { Banks, Market, Boatman, Activities, Visit, TripBand, Footer } from './components/Visit.jsx'
import site from './data/site.json'

export default function App() {
  return (
    <>
      <a className="skip" href="#evening">ข้ามไปเนื้อหา</a>
      <PageBar />
      <Header />
      <main id="main">
        <Hero />
        <Evening />
        <BoatSec />
        <Fireflies />
        <Route />
        <Dark />
        <Banks />
        <Market />
        <Boatman />
        <Activities />
        <Visit />
        <TripBand />
      </main>
      <Footer />
    </>
  )
}
