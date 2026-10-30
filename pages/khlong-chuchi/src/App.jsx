import Header from './components/Header.jsx'
import PageBar from './components/PageBar.jsx'
import Hero from './components/Hero.jsx'
import { Village, Fishing, Seasons, Mangrove } from './components/Story.jsx'
import { Community, Activities, Boats, Food, Visit, TripBand, Footer } from './components/Visit.jsx'
import site from './data/site.json'

export default function App() {
  return (
    <>
      <a className="skip" href="#village">ข้ามไปเนื้อหา</a>
      <PageBar />
      <Header />
      <main id="main">
        <Hero />
        <Village />
        <Fishing />
        <Seasons />
        <Mangrove />
        <Community />
        <Activities />
        <Boats />
        <Food />
        <Visit />
        <TripBand />
      </main>
      <Footer />
    </>
  )
}
