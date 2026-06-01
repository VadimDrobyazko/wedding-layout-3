import { useWeddingConfig } from '@context/WeddingConfigContext'
import styles from './Hero.module.css'

export default function Hero() {
  const { couple, event } = useWeddingConfig()

  return (
    <section className={styles.hero}>
      <video
        className={styles.video}
        autoPlay
        muted
        loop
        playsInline
        src='/videos/first.mp4'
        aria-hidden='true'
      />
      <div className={styles.overlay} aria-hidden='true' />
      <div className={styles.content}>
        <h1 className={styles.names}>
          <span className={styles.initial}>{couple.bride[0].toUpperCase()}</span>
          <span className={styles.ampersand}>&</span>
          <span className={styles.initial}>{couple.groom[0].toUpperCase()}</span>
        </h1>
      </div>
      <div className={styles.bottom}>
        <div className={styles.divider} aria-hidden='true' />
        <p className={styles.date}>{event.date}</p>
        <p className={styles.city}>{event.city}</p>
      </div>
    </section>
  )
}
