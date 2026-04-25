import { useWeddingConfig } from '@context/WeddingConfigContext'
import { useReveal } from '@hooks/useReveal'
import styles from './Timing.module.css'

export default function Timing() {
  const { timeline } = useWeddingConfig()
  const headingRef = useReveal(styles.visible)
  const itemRef = useReveal(styles.visible)

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 ref={headingRef} className={styles.heading}>
          Програма дня
        </h2>
        <div className={styles.divider} aria-hidden='true' />
        <ol className={styles.timeline}>
          {timeline.map((item, i) => (
            <li
              key={item.time}
              ref={itemRef}
              className={`${styles.item} ${item.isDim ? styles.dim : ''}`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <span className={styles.time}>{item.time}</span>
              <div className={styles.dot} aria-hidden='true' />
              <div className={styles.eventInfo}>
                <span className={styles.eventName}>{item.event}</span>
                {item.sub && <span className={styles.sub}>{item.sub}</span>}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
