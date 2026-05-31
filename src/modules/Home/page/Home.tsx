import Hero from '../components/Hero/Hero'
import MapSection from '../components/MapSection/MapSection'
import Looks from '../components/Looks/Looks'
import Timing from '../components/Timing/Timing'
import Organizer from '../components/Organizer/Organizer'
import Story from '../components/Story/Story'
import Countdown from '../components/Countdown/Countdown'
import Footer from '@layouts/components/Footer/Footer'
import styles from './Home.module.css'

export default function Home() {
  return (
    <main>
      <Hero />
      <MapSection />
      <Looks />
      <Timing />
      <Organizer />
      <div
        className={styles.storyBlock}
        style={{ backgroundImage: "url('/images/background.webp')" }}
      >
        <Story />
        <Countdown />
      </div>
      <Footer />
    </main>
  )
}
