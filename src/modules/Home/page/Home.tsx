import Hero from '../components/Hero/Hero'
import Countdown from '../components/Countdown/Countdown'
import WaitingYou from '../components/WaitingYou/WaitingYou'
import Looks from '../components/Looks/Looks'
import Timing from '../components/Timing/Timing'
import MapSection from '../components/MapSection/MapSection'
import Organizer from '../components/Organizer/Organizer'

export default function Home() {
  return (
    <main>
      <Hero />
      <Countdown />
      <WaitingYou />
      <Looks />
      <Timing />
      <MapSection />
      <Organizer />
    </main>
  )
}
